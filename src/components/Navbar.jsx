import React ,{useState} from 'react'
import { imgAssets, imgAssets2 } from '../assets/images/imgAssets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div className="fixed z-10 top-[10px] md:top-[30px] w-full px-[6px] md:px-[40px]">
        <div className=" fixed backdrop-filter backdrop-blur-lg flex items-center justify-between container py-[24px] px-[24px] bg-[#00000080] rounded-[40px] font-inter font-medium">
            {/* <div className="flex justify-between items-center shrink-0"> */}
                <Link className="text-20 text-white" to='/frankbudike/'>Frank Studios</Link>
            {/* </div> */}
            <div id="" className="hidden md:flex lg:flex justify-between text-16 text-white px-[40px]">
                <div className=''></div>
                <a href='#home'>
                    <p className="text-16 font-inter font-medium py-[10px] lg:py-2 max-lg:border-b border-b-stroke p-3">Home</p>
                </a>
                <a href='#gallery'>
                    <p className="capitalize cursor-pointer py-[10px] lg:py-2 max-lg:border-b border-b-stroke p-3">Gallery</p>
                </a>
                <NavLink to="/frankbudike/biography">
                    <p className="text-16 font-inter font-medium py-[10px] lg:py-2 max-lg:border-b border-b-stroke p-3">Biography</p>
                </NavLink>
                <div className="flex items-center gap-6">
                <a href="https://wa.me/message/4RIDHY4CPZPGI1">
                <button  className="text-16 text-white border-[2px] border-white pl-[20px] py-[4px] pr-[4px] rounded-[40px]">Contact
                <img alt="arrow" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="inline ml-[20px]"  src={imgAssets.letsTalkSvg}/>
                </button>
                </a>
                </div>
                <div className="z-50 flex sm:flex items-center gap-6">
                <img onClick={()=>setVisible(true)} src={imgAssets.hamBurger} className='w-5 cursor-pointer md:hidden lg:hidden ' alt="" />
                </div>
                
            </div>
            </div>
            

            <div className={`absolute sm:flex md:flex lg:flex top-0 right-0 bottom-0 overflow-hidden transition-all  ${visible ? 'w-full':'w-0'}`}>
                <div className={`flex flex-col text-white-600`}>
                    <div onClick={()=>setVisible(false)} className="flex items-center">
                        <img src={imgAssets2.logo} width="30" className="h-4 rotate-180" alt="menu"/>
                        <p>Back</p>
                    </div>

                <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/frankbudike/'>HOME</NavLink>
                <a href='#gallery' className='py-2 pl-6 border' onClick={()=>setVisible(false)} >Gallery</a>
                <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/frankbudike/biography'>Biography</NavLink>
                <a href="https://wa.me/message/4RIDHY4CPZPGI1" className='py-2 pl-6 border' onClick={()=>setVisible(false)} >Gallery</a>
                </div>
                </div>
            </div>
        
  )
}

export default Navbar
