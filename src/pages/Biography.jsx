import React from 'react'
import BiographyCard from '../components/BiographyCard'
import BiographyCard2 from '../components/BiographCard2'

const Biography = () => {
  return (
    <div className='bg-black px-[16px] sm:px-[80px] sm:text-[60px] sm:pt-[40px] pb-[40px] sm:pb-[80px] md:pt-[10px] min-h-[80vh] md:min-h-[85vh]'>
      <h2 className="text-[44px] pt-[80px] md:text-[80px] text-white text-center font-playFair mb-[40px] sm:mb-[80px]">Biography</h2>
      <div  className='text-[20px]'>
      <BiographyCard2/>
      </div>
    </div>
  )
}

export default Biography
