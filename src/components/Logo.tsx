import Image from 'next/image'

export default function Logo({ size = 28 }: { size?: number }) {
  return <Image src="/images/qeja-logo.png" alt="Qeja" width={size} height={size} priority />
}
