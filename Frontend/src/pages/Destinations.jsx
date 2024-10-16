import React from 'react'
import DestinationCard from '../components/Cards/DestinationCard'
import { useParams } from 'react-router-dom'

const Destinations = () => {
    const {categoryId} = useParams();
    
  return (
    <div>
        <div>Filter</div>
        <div>
            <h2>Destinations</h2>
            <DestinationCard route={categoryId} />
        </div>
    </div>
  )
}

export default Destinations