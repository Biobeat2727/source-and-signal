'use client'

import { useEffect, useId, useRef } from 'react'

function shape(index: number, time: number) {
  let d = ''
  const phase = index / 71
  for (let x = 0; x <= 1100; x += 5) {
    const envelope = Math.pow(Math.sin(Math.PI * x / 1100), 1.7)
    const drift = .19 * Math.sin(time * .8) + .11 * Math.sin(x / 220 - time * .65)
    const amplitude = 104 + 12 * Math.sin(time * .95 + phase * 1.7)
    const y = 180 + envelope * (Math.sin(x / 128 + phase * 3.7 + drift) * amplitude + (phase - .5) * 160 + 7 * Math.sin(x / 160 - time * .85))
    d += `${x ? 'L' : 'M'}${x},${y.toFixed(2)}`
  }
  return d
}

const initialPaths = Array.from({ length: 72 }, (_, i) => shape(i, 0))

export default function SignalWave() {
  const id = useId().replace(/:/g, '')
  const svg = useRef<SVGSVGElement>(null)
  const group = useRef<SVGGElement>(null)
  const reveal = useRef<SVGRectElement>(null)

  useEffect(() => {
    if (!svg.current || !group.current || !reveal.current) return
    const paths = Array.from(group.current.querySelectorAll('path'))
    const rect = reveal.current
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
      if (now - last > 32) {
        const progress = Math.min(1, Math.max(0, (elapsed - .15) / 2.1))
        rect.setAttribute('width', String(1120 * progress * progress * (3 - 2 * progress)))
        paths.forEach((p, i) => p.setAttribute('d', shape(i, elapsed)))
        last = now
      }
      frame = requestAnimationFrame(paint)
    }
    function sync() {
      cancelAnimationFrame(frame)
      previous = 0
      if (motion.matches) {
        rect.setAttribute('width', '1120')
        paths.forEach((p, i) => p.setAttribute('d', initialPaths[i]))
      } else if (visible && !document.hidden) frame = requestAnimationFrame(paint)
    }
    if (!motion.matches) rect.setAttribute('width', '0')
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
      <clipPath id={`${id}-reveal`} clipPathUnits="userSpaceOnUse">
        <rect ref={reveal} x="-10" y="-60" width="1120" height="480" />
      </clipPath>
    </defs>
    <g ref={group} clipPath={`url(#${id}-reveal)`}>{initialPaths.map((d, i) => <path key={i} d={d} fill="none" stroke={`url(#${id}-gradient)`} strokeWidth=".9" opacity={.3 + .65 * Math.sin(Math.PI * i / 72)} />)}</g>
  </svg>
}
