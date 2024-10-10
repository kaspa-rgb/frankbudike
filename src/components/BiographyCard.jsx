import React from 'react'
import { imgAssets2 } from '../assets/images/imgAssets'

const BiographyCard = () => {
  return (
    <div className="px-[16px] sm:px-[80px] pb-[10px]">
    <h2 className="text-[44px] pt-[10px] md:text-[80px] text-white text-center font-playFair mb-[10px] sm:mb-[80px]">Biography</h2>
    <div className="flex flex-col lg:flex-row items-center">
    <section className="basis-[50%] gap-8">
            <img alt="hero" loading="lazy" className='color-transparent rounded-2xl' width="500" height="304" decoding="async" data-nimg="1" src={imgAssets2.budike} />
        </section>
        <section className="text-17 sm:text-18 text-white font-inter font-light basis-[50%] mb-[10px] lg:mb-0 lg:mr-[20px]">
          <p className="sm:ml-[40px] mb-[20px]">Anigbo chukwubudike Budike Franklin is a Nigerian hyperealistic artist, Born and raised in Nigeria, Enugu state precisely! 
              Growing up as Average Nigerian and as the only artist in the family of 6 children faced a lot of struggle in making it out of the streets of Enugu in his pursuit of being a well known pro artist.
              Chukwubudike is a student of computer engineering in ESUT(Enugu state university of science and technology) ...</p>
          <div className="flex lg:block justify-center mt-[40px]">
            <p className="mb-[20px]">
            <a href="/frankbudike/biography">
            <button className="font-inter font-semibold border sm:ml-[80px] border-white text-white rounded-[40px] w-[212px] h-[48px]">More Details</button>
            </a>
            </p>
          </div>  
        </section>

    </div>
</div>
  )
}

export default BiographyCard
