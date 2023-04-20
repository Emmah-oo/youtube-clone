import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Videocard = ({ video }) => {
  return (
    <div className='bg-transparent p-6 w-[100%] h-[100%] text-white'>
      <Link to={`/video/${video.id.videoId}`}>
        <img 
          src={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" 
          className='w-[100%]'
        />
      </Link>
      <h1 className='mb-5 font-bold text-[1rem]'>{video?.snippet?.title || demoVideoTitle}</h1>
      <Link to={`/channel/${video.snippet.channelId}`} className='flex items-center gap-2'> 
        <h2 className='font-bold text-[1rem]'>{video?.snippet?.channelTitle.slice(0, 50) || demoChannelTitle}</h2>
        <BsFillPatchCheckFill />
      </Link>
    </div>
  )
}

export default Videocard