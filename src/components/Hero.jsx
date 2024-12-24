import React from 'react'

const Hero = () => {
  return (
        <div className="hero w-full">
            <div className="flex flex-col justify-end absolute bottom-0 w-full h-0 text-center pb-[80px] sm:pb-[26px]">
                <div className='ml-auto'>
                <h1 className="text-[90px] sm:text-[100px] md:text-[140px] lg:text-[110px] font-playFair font-semibold leading-none">
                    <span className="block just-sserif text-white -ml-[40px] sm:-ml-[120px] md:-ml-[160px] lg:-ml-[190px] sm:-mt-[60px] hide_tap md:-mt-[20px] lg:-mt-[20px]">Frank</span>
                    <span className="block just-sserif text-white-500 pl-[40px] sm:pl-[120px] md:pl-[140px] lg:pl-[170px] sm:-mt-[40px] lg:mt-[2px] hide_tap">Studios</span>
                </h1>
                </div>
                <a href="#gallery" className="flex justify-center mt-[30px] sm:mt-[50px] w-[50px] mx-auto">
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50px] cursor-pointer animate-bounce">
                        <path fillRule="evenodd" clipRule="evenodd" d="M40.2272 55.3078H40.2256V55.3088H37.997V55.0563C37.9296 49.7373 35.7258 46.4806 33.2163 44.5227C30.6099 42.4893 27.6345 41.8297 26.2373 41.8297V39.6011C28.1109 39.6011 31.5733 40.4144 34.5871 42.7656C35.8587 43.7577 37.0443 45.0193 37.997 46.5957V22.6906H40.2256V46.6021C41.179 45.0227 42.366 43.7591 43.6394 42.7656C46.6532 40.4144 50.1156 39.6011 51.9892 39.6011V41.8297C50.592 41.8297 47.6166 42.4893 45.0102 44.5227C42.4613 46.5113 40.2279 49.8397 40.2279 55.3078H40.2272Z" fill="white"></path>
                        <rect x="1.67143" y="1.67143" width="74.6571" height="74.6571" rx="37.3286" stroke="#F6F6F6" strokeWidth="3.34286"></rect>
                    </svg>
                </a>
            </div>
        </div>
  )
}
export default Hero
