import { Search } from '@mui/icons-material';
import React from 'react'

const Searchbar:React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl">
            <Search className="text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black outline-0 placeholder-black w-full"
            />
          </div>
  )
}

export default Searchbar;