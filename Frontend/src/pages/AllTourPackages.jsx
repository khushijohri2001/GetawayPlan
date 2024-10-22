import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTourPackages } from '../redux/slices/tourPackageSlice';
import TourPackageCard from '../components/Cards/TourPackageCard';

const AllTourPackages = () => {
    const {allTourPackageData} = useSelector((store) => store.tourPackage);
    const {singleUserData} = useSelector((store) => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllTourPackages());
    }, [dispatch])
    

  return (
    <div className='m-8'>
        <h2 className="text-2xl text-cyan-900 font-bold my-4 mb-8">
          All Tour Packages
        </h2>
        <div className='flex flex-wrap gap-8 justify-between'>
            {
                allTourPackageData && allTourPackageData .map((data) => (
                    <TourPackageCard
                      key={data._id}
                      data={data}
                      userId={singleUserData._id}
                    />
                  ))
            }
        </div>
    </div>
  )
}

export default AllTourPackages