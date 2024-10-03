import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Menu, X} from 'lucide-react'

const NavLinks = ()=>{
    return(
    <>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
      </>
    )

}


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }

  return (
    <>
        <nav className='w-1/3 flex justify-end'>
        <div className="hidden justify-between md:flex">
            <NavLinks/>
        </div>
        <div>
            <button className='md:hidden'>
                {
                    isOpen ? <X /> : <Menu />
                }
            </button>
        </div>
    </nav>
    {
        isOpen && (
            <div className='flex basis-full flex-col items-center'>
                <NavLinks/>
            </div>

        )
    }
    </>
  )
}

export default Nav
