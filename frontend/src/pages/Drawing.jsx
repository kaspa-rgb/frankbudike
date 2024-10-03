import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ArtCard2 from '../components/ArtCard2'
import { ArtContext } from '../context/ArtContext';
import { imgAssets } from '../assets/images/imgAssets';


const Drawing = ({description}) => {
    const {artId} = useParams();
    const { artwork } = useContext(ArtContext);
    const [artData, setArtData] = useState(false);
    const [image,setImage] = useState('');
    const [size,setSize] = useState('')

      
  const fetchArtData = async ()=>{

    artwork.map((item)=>{
      if (item.id === artId) {
        setArtData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }
  useEffect(()=>{
    fetchArtData();
  },[artwork])
  return artData ? (
    <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-center mb-6">Mixed Emotions</h1>

    <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">Description</h2>
        <p class="mb-4">
          {
            artData.map()
          }
        </p>
    </div>

    <div class="flex justify-center mb-8">
    <img className=' h-auto' src={image} alt="" width={'200px'} height={'200px'} />
    </div>
</div>

  ) : <div className='opacity-0'></div>
}

export default Drawing

