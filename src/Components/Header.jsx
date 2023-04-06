import React from 'react'
import { logo } from '../utils/constants'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='flex h-[10vh] px-10 items-center justify-between bg-slate-900'>
        <img src={logo} alt="Logo" className='w-[3%]' />
        <Searchbar />
    </div>
  )
}

export default Header