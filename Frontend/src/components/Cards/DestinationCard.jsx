import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({route}) => {
  return (
    <div className='inline-block border border-cyan-800 p-2 rounded'>
        <img src="https://www.keralasoils.gov.in/sites/default/files/inline-images/kerala1.jpg" alt="" className='h-36 w-56 mb-2' />
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
                <p className='text-cyan-800 font-bold'>Kerala</p>
                <p className='text-green-600 font-bold'>₹7k to 2lac</p>
            </div>
            <button className='bg-cyan-800 text-white px-4 py-2 rounded'>
                {/* <Link to={`${name}`}> */}
                <Link to={`kerala`}>
                View Tour Packages
                </Link>
                </button>
        </div>
    </div>
  )
}

export default DestinationCard