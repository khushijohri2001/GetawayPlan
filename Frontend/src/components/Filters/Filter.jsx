import React from 'react'
import SearchBar from './SearchBar'

const Filter = () => {
  return (
    <div className="min-w-[300px] bg-white flex flex-col mx-2 shadow-2xl">
    <div className="p-4 flex justify-between items-center">
      {/* <GiHamburgerMenu className="text-xl cursor-pointer"/> */}
      <h2 className="text-xl font-semibold text-black">Filter Destinations</h2>
    </div>
    <hr className="border-gray-300 mt-2" />
    <div className="divide-y w-full flex flex-col items-center divide-gray-200">
      {/* slider component to be made here */}
      <SearchBar/>
    {/* <FilterPrice/> */}
    </div>
    </div>
  )
}

export default Filter