import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ArtCard2 from '../components/ArtCard2'
import { ArtContext } from '../context/ArtContext';
import { imgAssets } from '../assets/images/imgAssets';


const Drawing = () => {
    const {artId} = useParams();
    const { artwork } = useContext(ArtContext);
    const [artData, setArtData] = useState(false);
    const [image,setImage] = useState('');
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')

      
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
    <div className='flex flex-col sm:flex-row p-10'>
      
    {/* drawing description Left Side */}
    <div className='w-full h-80vh sm:w-1/2 flex items-center justify-center mt-16 pt-10 sm:py-0'>
      <div className='text-white mt-5'>
          <h1 className=' text-3xl sm:py-3 lg:text-5xl mb-10'>{name}</h1>
          <div className='flex gap-2 mt-10'>
          {description}
          </div>
      </div>
    </div>
    {/* drawing description Right Side */}
    <div className='flex items-center'>
    <img className='w-full mt-5 sm:mt-10 md:w-[70%] md:h-[80%] lg:w-[80%] lg:h-[60%] sm:w-1/2' src={image} alt=""   />
    </div>
    
    </div>
  ) : <div className='opacity-0'></div>
}

export default Drawing