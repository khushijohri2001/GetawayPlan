import React from 'react'
import ThemeList from './ThemeList'

const TourThemeSection = () => {
  return (
    <div className='px-10 py-16 w-3/4 m-auto'>
        <h2 className='text-xl font-bold text-cyan-800 mb-6' >Explore Destination by Theme</h2>
        <ThemeList/>
    </div>
  )
}

export default TourThemeSection