import React from 'react'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
  return (
    <div className='px-2 border rounded-md flex items-center justify-between bg-white h-10 w-[30%]'>
      <input 
        type="search" 
        name="search" 
        className='px-2 border-0 rounded-md bg-transparent w-full h-full outline-none' 
        placeholder='Search Videos'
      />
      <Search className='w-50'/>
    </div>
  )
}

export default Searchbar