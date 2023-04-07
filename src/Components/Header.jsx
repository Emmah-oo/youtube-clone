import React from 'react'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='flex h-[10vh] px-5 md:px-10 items-center justify-between bg-black'>
      <img src={logo} alt="Logo" className='w-[10%] sm:w-[5%] lg:w-[3%]' />
      <Searchbar />
    </div>
  )
}

export default Header