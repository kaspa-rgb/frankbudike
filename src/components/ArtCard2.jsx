import React from 'react'
import './artcards.css'
import { Link } from 'react-router-dom'

const ArtCard2 = ({id, name, image}) => {
  
  return (
  <Link className='cursor-pointer' to={`/frankbudike/drawing/${id}`}>
        <div className="relative overflow-hidden mr-[20px] img-container w-[94%] sm:w-[400px] h-[520px] ">
      <span>
        <img alt={name} src={image[0]} id={name} decoding="async" data-nimg="fill" className="bg-[#8080800d] duration-700 ease-in-out img-wrapper scale-100 w-full h-full"  sizes="100vw" />
      </span>
    </div>
  </Link>
  )
}

export default ArtCard2
