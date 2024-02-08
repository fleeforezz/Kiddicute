import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Toprate from '@/components/Toprate'
import Trending from '@/components/Trending'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Toprate />
      <Trending />
    </>
  )
}
