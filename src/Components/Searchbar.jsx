import React,{ useState } from 'react'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <form 
      onSubmit={handleSubmit}
      className='w-[50%] px-2 border rounded-md flex items-center justify-between bg-white h-10 lg:w-[30%]'
    >
      <input 
        type="search" 
        name="search" 
        className='px-2 border-0 rounded-md bg-transparent w-full h-full outline-none' 
        placeholder='Search Videos'
        value={searchTerm}
        onChange={handleSearch}
      />
        <Search className='w-50' />
    </form>
  )
}

export default Searchbar