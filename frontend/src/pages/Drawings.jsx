import React from 'react'
import ArtCollection2 from '../components/ArtCollection2'
const Drawings = () => {
  return (
    <div className='bg-black container px-[16px] sm:px-[80px] sm:text-[60px] sm:pt-[40px] pb-[40px] sm:pb-[80px] md:pt-[10px] min-h-[80vh] md:min-h-[85vh]'>
      <h2 className="text-[44px] pt-[80px] md:text-[80px] text-white text-center font-playFair mb-[40px] sm:mb-[80px]">Drawings</h2>
    <div className="flex flex-col items-center gap-8">
      <ArtCollection2/>
    </div>
    </div>
  )
}

export default Drawings
