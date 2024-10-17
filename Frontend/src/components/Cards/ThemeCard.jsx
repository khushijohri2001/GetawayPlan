import React from 'react'
import { Link } from 'react-router-dom';

const ThemeCard = ({ data }) => {
  const { image, name } = data;

  return (
    <div>
      <Link to={name}>
        <img src={image} alt="" className='w-36 h-48 object-cover rounded-sm mb-2' />
        <p className='text-cyan-700 font-bold'>{name}</p>
        <p className='text-xs text-gray-500'>10+ Destinations</p>
      </Link>
    </div>
  )
}

export default ThemeCard