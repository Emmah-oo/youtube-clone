import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='fixed top-0 left-0 h-[100%] overflow-auto mt-[8vh] flex flex-col gap-5 py-5 px-5 text-white bg-[#212121]'>
        {categories.map((item) => (
          <button key={item.name}
            onClick={() => setSelectedCategory(item.name)}
            className='flex items-center justify-start gap-2 p-2 rounded-xl px-4'
            style={{background: item.name === selectedCategory && '#FC1503'}}
            >
            <span className=''>{item.icon}</span>
            <h1>{item.name}</h1>
          </button>
        ))}
    </div>
  )
}

export default Sidebar