import React, { useState, useContext, useEffect } from 'react'
import ArtCard from './ArtCard'
import { ArtContext } from '../context/ArtContext';

const ArtCollection = () => {
  const { artwork } = useContext(ArtContext);
  const [latestArtWork] = useState([]);

  useEffect(()=>{
    latestArtWork
  },[])
  return (
      artwork.map((item, index)=>(<ArtCard key={index} name={item.name} image={item.image} id={item.id}/>))
  )
}

export default ArtCollection
