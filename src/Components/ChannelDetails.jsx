import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
const [channelDetails, setChannelDetails] = useState(null)
const [videos, setVideos] = useState()
const { id } = useParams()
//   console.log(channelDetails)
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetails(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data.items))
  },[id])
  return (
    <div>
        <div className='h-[20vh] w-[100%] bg-purple-700'></div>
        <div>
            <img src={channelDetails?.snippet?.thumbnails?.high?.url} alt="" />
            <h1>{channelDetails?.snippet?.title}</h1>
            <h1>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()}</h1>
        </div>

        <div className='grid grid-cols-3'>
            {videos?.map((video) => (
                <div className='bg-black text-white'>
                    <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
                    <h1>{video?.snippet?.title}</h1>
                    <h2>{video?.snippet?.channelTitle}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChannelDetails