import React from 'react'
import { imgAssets2 } from '../assets/images/imgAssets'

const BiographyCard2 = () => {
  return (
    <div className="container px-[16px] sm:px-[80px] pb-[80px]">
    <div className="flex flex-col lg:flex-row items-center">
        <section className="text-17 sm:text-18 text-white font-inter font-light basis-[50%] mb-[60px] lg:mb-0 lg:mr-[20px]">
            <p className="mb-[20px]">Anigbo chukwubudike Budike Franklin is a Nigerian hyperealistic artist, Born and raised in Nigeria, Enugu state precisely! 
Growing up as Average Nigerian and as the only artist in the family of 6 children faced a lot of struggle in making it out of the streets of Enugu in his pursuit of being a well known pro artist.
Chukwubudike is a student of computer engineering in ESUT(Enugu state university of science and technology).</p>
            <p className="mb-[40px]"> I believed that in this current generation where almost everything is digitalized, I can use computer as a tool to improve my art! Making room for more opportunities! 
My journey into Art started when i was about 5 years old and I got awarded the best artist in my class because I draw my assignments myself and I make it look perfect even at a very tender age! I was amazing and I told myself that in years to come I would be one of the most recognized artist in the world! I also had my entire family as my support, most especially my mum, my younger brother and my cousins! They are also part of my success story! 
I drew my first personal art project “JOY” which is a way of expressing the feeling I get whenever I make artworks and my progress so far. This is something I have always wanted to do ever since I was a kid! Aiming to shine bright, stand strong and become the best in what I do! 
I’m happy to see how far I have come, so far so good! And I’m happy I can now boast of creating complete Artworks!'</p>
        </section>
        <section className="basis-[50%] gap-3">
            <img alt="hero" loading="lazy" className='color-transparent rounded-2xl' width="500" height="604" decoding="async" data-nimg="1" src={imgAssets2.budike} />
        </section>
    </div>
</div>
  )
}

export default BiographyCard2
