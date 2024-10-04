import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
<header className='bg-dark-background sticky text-white top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8'>
    <Logo/>
    <Nav/>
</header>
  )
}

export default Header
