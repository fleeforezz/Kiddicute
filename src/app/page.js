import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Toprate from '@/components/Toprate'
import Trending from '@/components/Trending'
import Trending_Category from '@/components/Trending_Category'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trending_Category />
      <Toprate />
      <Trending />
    </>
  )
}
