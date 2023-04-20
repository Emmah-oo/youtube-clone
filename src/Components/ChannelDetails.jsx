import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { demoProfilePicture } from '../utils/constants'

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
        <div className='flex flex-col items-center justify-center my-4'>
            <div className='w-[15%]'>
                <img src={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt=""
                className='w-[100%] border-2 rounded-full border-black'
                />
            </div>
            <div className='flex items-center gap-1'>
                <h1>{channelDetails?.snippet?.title}</h1>
                <BsFillPatchCheckFill />
            </div>
            <h1>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers</h1>
        </div>

        <div className='grid grid-cols-3 gap-[2rem] bg-black'>
            {videos?.map((video) => (
                <div className='bg-black text-white cursor-pointer w-[80%] m-auto'>
                    <Link to={`/video/${video.id.videoId}`}>
                    <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
                    </Link>
                    <h1>{video?.snippet?.title}</h1>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-bold mt-1'>{video?.snippet?.channelTitle}</h2>
                        <BsFillPatchCheckFill />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChannelDetails