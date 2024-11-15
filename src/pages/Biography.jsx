import React from 'react'
import BiographyCard2 from '../components/BiographyCard2'

const Biography = () => {
  return (
    <div className='bg-black px-[16px] sm:px-[80px] sm:text-[60px] sm:pt-[40px] pb-[40px] sm:pb-[80px] md:pt-[10px] min-h-[80vh] md:min-h-[85vh]'>
      <h2 className="text-[44px] pt-[80px] just-sserif md:text-[80px] text-white text-center font-playFair mb-[40px] sm:mb-[80px]">Biography</h2>
      <div  className='text-[20px]'>
      <BiographyCard2/>
      </div>
      <div className="flex justify-center mb-[20px] mt-[20px]"><a href="https://wa.me/message/4RIDHY4CPZPGI1"><button className=" font-inter font-semibold text-[25px] border border-white text-white rounded-[40px] w-[212px] h-[48px]">Contact Me</button></a></div>
    </div>
  )
}

export default Biography
