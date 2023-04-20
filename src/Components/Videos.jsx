import React from 'react'
import Videocard from './Videocard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
    
  return (
      <div className='ml-[180px] bg-black mt-[8vh] w-[100%] grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] p-1'>
        {videos?.map((video, idx) => (
          <div key={idx} className='w-[100%]'>
            {video.id.videoId && <Videocard video = {video}/>}
            {video.id.channelId && <ChannelCard channelDetails = {video}/>}
          </div>
        ))}
      </div>
  )
}

export default Videos