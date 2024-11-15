import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArtContext } from '../context/ArtContext';

const Drawing = () => {
    const {artId} = useParams();
    const { artwork } = useContext(ArtContext);
    const [artData, setArtData] = useState(false);
    const [image,setImage] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
      
  const fetchArtData = async ()=>{

    artwork.map((item)=>{
      if (item.id === artId) {
        setArtData(item)
        setImage(item.image[0])
        setDescription(item.description)
        setName(item.name)
        return null;
      }
    })

  }
  useEffect(()=>{
    fetchArtData();
  },[artwork])
  return artData ? (
    <div className='flex flex-col sm:flex-row p-2 bg-black'>
    {/* drawing description Left Side */}
    <div className='w-full sm:w-1/2 '>
      <div className='text-white mt-5'>
          <h1 className=' text-3xl sm:py-3 lg:text-5xl lg:py-10 mb-10'>{name}</h1>
          <div className='mt-10 lg:py-10'>
          {description}
          </div>
      </div>
    </div>
    {/* drawing description Right Side */}
    <img className='h-[80vh] rounded-3xl sm:w-1/2' src={image} alt="" />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Drawing