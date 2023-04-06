import React from 'react'
import { Link } from 'react-router-dom'

const Videocard = ({ video }) => {
  return (
    <div className='border bg-slate-500 p-6 w-[100%] h-[100%]'>
        <Link to={`/video/${video.id.videoId}`}>
            <img 
                src={video?.snippet?.thumbnails?.high?.url} alt="" 
                className='w-[100%]'
            />
        </Link>
        <h1>{video?.snippet?.title}</h1>
        <Link to={`/channel/${video.id.channelId}`}>
            <h2>{video?.snippet?.channelTitle.slice(0, 50)}</h2>
        </Link>
    </div>
  )
}

export default Videocard