import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookings } from '../redux/slices/bookingSlice';

const useCheckBooking = (tourPackageId, userId) => {
    const {allBookingData} = useSelector((store) => store.booking);
    const [isBooked, setIsBooked] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllBookings())
    }, [])

    useEffect(() => {
       const existingBooking = allBookingData&&allBookingData.filter((booking) => booking.user._id === userId );
       setIsBooked(existingBooking);

       const abc = allBookingData&& allBookingData.filter((booking) => booking.tourPackage._id === tourPackageId )
       console.log(abc) 
       console.log(tourPackageId);
       
    }, [allBookingData])
    

    return { isBooked }
}

export default useCheckBooking