import React from 'react'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)
  // console.log(videos)

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])
  
  return (
    <div className='flex'>
      <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
      <Videos videos = {videos} />
    </div>
  )
}

export default Feed