import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../../redux/slices/destinationSlice';
import { FaSearchengin } from 'react-icons/fa6';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    const handleSearchChange = (e)=>{
        setInput(e.target.value)
    }

    useEffect(()=>{
        dispatch(filterBySearch(input))
    }, [input])

  return (
    <div className='flex justify-around items-center border-2 rounded-lg my-4 w-fit'>
        <input type='text' placeholder='Search by keyword' className=' h-full p-2 rounded-lg text-lg focus:outline-none' onChange={handleSearchChange}/>
        <FaSearchengin size={24} className='cursor-pointer pr-2' />
    </div>
  )
}

export default SearchBar