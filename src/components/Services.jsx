import React from 'react'

const Services = () => {
  return (
<div id="services">
    <div className=" text-white">
        <hr />
    <h2 className="text-[24px] font-[35px] md:text-[80px] text-white text-center font-playFair mb-[10px] sm:mb-[20px]">Services</h2>
        <div className="flex flex-col gap-5 md:gap-5 lg:flex-row sm:flex-row md:flex-row ">
            <div className='mx-5 hover:scale-110 hover:bg-[#ff004f] transiton ease-in-out 0.5s rounded-xl bg-[#262626] p-4  '>
                <h2>Commissioned Artworks</h2>
                <p>In this vibrant artwork, a radiant sunburst emerges from the center, casting warm, golden hues across the canvas.</p>
            </div>
            <div className='mx-5 hover:scale-110 hover:bg-[#ff004f] transiton ease-in-out 0.5s rounded-xl bg-[#262626] p-4 '>
                <h2>Mural Painting</h2>
                <p>the canvas pulsates with energy and movement, capturing a moment of transformation</p>
            </div>
            <div className='mx-5 hover:scale-110 hover:bg-[#ff004f] transiton ease-in-out rounded-xl bg-[#262626] p-4 '>
                <h2>Live Painting</h2>
                <p>In this Fabulous artwork
                is a testament to resilience and transformation of the continent Africa</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services
