import React from 'react'
import ArtCollection from './ArtCollection'

const Gallery = () => {
  return (
    <div className='py-[10px] ' id="gallery">
      <h2 className="text-[44px] font-[35px] md:text-[80px] text-white text-center font-playFair mb-[10px] sm:mb-[20px]">Gallery</h2>
      <div className=''>
      <div className="flex ml-5 overflow-x-scroll">
      <ArtCollection/>
      </div>
      <div className="flex justify-center mb-[20px] mt-[20px]"><a href="/frankbudike/drawing"><button className=" font-inter font-semibold border border-white text-white rounded-[40px] w-[212px] h-[48px]">See More </button></a></div>
      <hr />
      </div>
    </div>
  )
}

export default Gallery
