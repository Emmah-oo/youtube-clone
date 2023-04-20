import React,{useState, useEffect} from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import Videocard from './Videocard'

const SearchPage = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  console.log(videos)
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items)) 
  },[searchTerm])

  return (
    <div>
      <h1 className='ml-10 text-black absolute top-[12vh] font-bold text-2xl'>Showing Videos for {searchTerm}</h1>
      <div className='grid grid-cols-4 gap-1 bg-black mt-[20vh]'>
        {videos.map((video, id) => (
          <Videocard video = {video} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage

