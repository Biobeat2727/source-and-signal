'use client'

import { useEffect, useId, useRef } from 'react'

// Sculpture geometry. 60 strands sampled every 11 units keeps the same silhouette
// as the original 72 x 221-point version at about a third of the HTML weight.
const STRANDS = 60
const STEP = 11
const WIDTH = 1100
const FRAME_MS = 48

function shape(index: number, time: number) {
  let d = ''
  const phase = index / (STRANDS - 1)
  for (let x = 0; x <= WIDTH; x += STEP) {
    const envelope = Math.pow(Math.sin(Math.PI * x / WIDTH), 1.7)
    const drift = .19 * Math.sin(time * .8) + .11 * Math.sin(x / 220 - time * .65)
    const amplitude = 104 + 12 * Math.sin(time * .95 + phase * 1.7)
    const y = 180 + envelope * (Math.sin(x / 128 + phase * 3.7 + drift) * amplitude + (phase - .5) * 160 + 7 * Math.sin(x / 160 - time * .85))
    d += (x ? 'L' : 'M') + x + ',' + y.toFixed(1)
  }
  return d
}

const initialPaths = Array.from({ length: STRANDS }, (_, i) => shape(i, 0))

export default function SignalWave() {
  const id = useId().replace(/:/g, '')
  const svg = useRef<SVGSVGElement>(null)
  const group = useRef<SVGGElement>(null)

  // The entrance reveal is pure CSS (see .signal-strands in resonance.css), so it
  // plays from first paint with no JavaScript and never flashes on hydration.
  // This effect only drives the slow ongoing fluctuation.
  useEffect(() => {
    if (!svg.current || !group.current) return
    const paths = Array.from(group.current.querySelectorAll('path'))
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let frame = 0
    let last = 0
    let previous = 0
    let elapsed = 0
    let stopped = false

    function paint(now: number) {
      if (stopped || !visible || document.hidden || motion.matches) return
      if (previous) elapsed += Math.min(now - previous, 100) / 1000
      previous = now
      if (now - last > FRAME_MS) {
        for (let i = 0; i < paths.length; i++) paths[i].setAttribute('d', shape(i, elapsed))
        last = now
      }
      frame = requestAnimationFrame(paint)
    }
    function sync() {
      cancelAnimationFrame(frame)
      previous = 0
      if (motion.matches) {
        for (let i = 0; i < paths.length; i++) paths[i].setAttribute('d', initialPaths[i])
      } else if (visible && !document.hidden) frame = requestAnimationFrame(paint)
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    }, { threshold: .05 })
    observer.observe(svg.current)
    motion.addEventListener('change', sync)
    document.addEventListener('visibilitychange', sync)
    return () => {
      stopped = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      motion.removeEventListener('change', sync)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return <svg ref={svg} className="signal-sculpture" viewBox="0 0 1100 360" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${id}-gradient`}>
        <stop stopColor="#716a9b" />
        <stop offset=".36" stopColor="#dfd1ff" />
        <stop offset=".65" stopColor="#c7c0ff" />
        <stop offset="1" stopColor="#585273" />
      </linearGradient>
    </defs>
    <g ref={group} className="signal-strands" stroke={`url(#${id}-gradient)`} fill="none" strokeWidth="1.05">
      {initialPaths.map((d, i) => <path key={i} d={d} opacity={(.3 + .65 * Math.sin(Math.PI * i / STRANDS)).toFixed(2)} />)}
    </g>
  </svg>
}
