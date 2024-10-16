import React, { useEffect } from 'react'
import ThemeCard from './Cards/ThemeCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories } from '../redux/slices/categorySlice';

const ThemeList = () => {
  const { allCategoryData } = useSelector((store) => store.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])

  return (
    <div className='flex gap-4 flex-wrap'>
      {
        allCategoryData && allCategoryData.length > 0 && allCategoryData.map((category) => <ThemeCard key={category._id} data={category} />)
      }
    </div>
  )
}

export default ThemeList