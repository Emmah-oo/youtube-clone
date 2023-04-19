import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelTitle } from '../utils/constants'

const Videocard = ({ video }) => {
  return (
    <div className='bg-transparent p-6 w-[100%] h-[100%] text-white'>
      <Link to={`/video/${video.id.videoId}`}>
        <img 
          src={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" 
          className='w-[100%]'
        />
      </Link>
      <h1 className='mb-5 font-bold text-[1rem]'>{video?.snippet?.title || demoChannelTitle}</h1>
      <Link to={`/channel/${video.snippet.channelId}`}> 
        <h2 className='font-bold text-[1rem]'>{video?.snippet?.channelTitle.slice(0, 50)}</h2>
      </Link>
    </div>
  )
}

export default Videocard