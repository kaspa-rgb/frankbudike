import React from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import BiographyCard from '../components/BiographyCard'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='bg-black' id='home'>
        <Hero/>
        <Gallery/>
        <div className='p-2 mt-1 '>
        <BiographyCard/>
        </div>
        <Services/>
    </div>
  )
}

export default Home
