import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channelDetails }) => {
  return (
    <Link to={`/channel/${channelDetails.id.channelId}`}> 
    <div className='bg-black h-full w-full flex items-center justify-center flex-col gap-5'>
      <img 
        src={channelDetails?.snippet?.thumbnails?.high?.url} 
        alt=""
        className='w-[50%] rounded-full border border-black' 
      />
      <h1 className='text-white text-3xl font-bold'>{channelDetails?.snippet?.channelTitle}</h1>
    </div>
    </Link>
  )
}

export default ChannelCard