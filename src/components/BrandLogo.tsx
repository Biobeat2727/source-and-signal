import Image from 'next/image'

export default function BrandLogo({ hero = false }: { hero?: boolean }) {
  return <Image src="/source-signal-wordmark.svg" width={900} height={150} alt="Source & Signal" priority={hero} className={hero ? 'hero-wordmark' : 'nav-wordmark'} />
}
