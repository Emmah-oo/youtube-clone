import React from 'react'
import Videocard from './Videocard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
  console.log(videos)
    
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2'>
      {videos?.map((video, idx) => (
        <div key={idx} className='w-[100%]'>
          {video.id.videoId && <Videocard video = {video}/>}
          {video.id.channelId && <ChannelCard />}
        </div>
      ))}
    </div>
  )
}

export default Videos