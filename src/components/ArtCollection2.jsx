import React, { useState, useContext, useEffect } from 'react';
import ArtCard2 from './ArtCard2';
import { ArtContext } from '../context/ArtContext';

const ArtCollection2 = () => {
  const { artwork } = useContext(ArtContext);
  const [latestArtWork] = useState([]);

  useEffect(()=>{
    latestArtWork
  },[])
  return (
      artwork.map((item, index)=>(<ArtCard2 key={index} name={item.name} image={item.image} id={item.id}/>))
  )
}

export default ArtCollection2
