import React from 'react'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='fixed top-0 left-0 w-[100%] flex h-[8vh] px-5 md:px-10 items-center justify-between bg-black'>
      <Link to={'/'}>
        <img src={logo} alt="Logo" className='w-[15%] sm:w-[10%] lg:w-[10%]' />
      </Link>
      <Searchbar />
    </div>
  )
}

export default Header