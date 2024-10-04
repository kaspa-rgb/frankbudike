import React from 'react'
import './artcards.css'

const ArtCard = ({name, image, id}) => {
  return (
    <div className="shrink-0 relative overflow-hidden mr-[20px] img-container w-[94%] sm:w-[400px] h-[520px] ">
      <span style={{boxSizing:'border-box', display: 'block', overflow: 'hidden',width:'initial', height:'initial', background:'none', opacity:1, border:0, margin:0, padding:0, position: 'absolute', inset:0}}>
        <div className="work">
        <img alt={name} src={image} decoding="async" data-nimg="fill" className="rounded-xl bg-[#8080800d] duration-700 ease-in-out img-wrapper scale-100 w-full h-full carou-img"  sizes="100vw" />
        <div className="layer">
          <h3>{name}</h3>
          <a href={``}>Learn More</a>
        </div>
        </div>
      </span>
    </div>
  )
}

export default ArtCard
