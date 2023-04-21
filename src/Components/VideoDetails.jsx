import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import Videocard from './Videocard'

const VideoDetails = () => {
  const { id } = useParams()

  const [videos, setVideos] = useState([])

  const [suggestedVideos, setSuggestedVideos] = useState([])

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideos(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setSuggestedVideos(data.items))

    scrollToTop()
  }, [id])
  return (
    <div className='mt-[8vh]'>
      <div className='w-[100%]'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
        className='react-player' controls width='100%' height='80vh' />
      </div>
      <div className='flex gap-5 flex-col px-6 mb-10'>
        <div className=''>
          <Link to={`/channel/${videos?.snippet?.channelId}`} className='flex items-center gap-2'>
            <h1 className='text-2xl font-bold mt-2 block'>{videos.snippet?.channelTitle}</h1>
            <BsFillPatchCheckFill className='mt-[15px]' />
          </Link>
        </div>
        
        <div className='flex items-center gap-3 w-[30%]'>
          <h1>{parseInt(videos?.statistics?.viewCount).toLocaleString()} Views</h1>
          <h1>{parseInt(videos?.statistics?.likeCount).toLocaleString()} Likes</h1>
          <h1>{parseInt(videos?.statistics?.commentCount).toLocaleString()} Comments</h1>
        </div>
      </div>

      <div className='grid grid-cols-4 bg-black'>
        {suggestedVideos.map((video, id) => (
          <Videocard video = {video} />
        ))}
      </div>
    </div>
  )
}

export default VideoDetails