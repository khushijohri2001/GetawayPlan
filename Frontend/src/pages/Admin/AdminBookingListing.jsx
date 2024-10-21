import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookings } from "../../redux/slices/bookingSlice";
import ListingTable from "../../components/Admin/ListingTable";

const AdminBookingListing = () => {
  const { allBookingData } = useSelector((store) => store.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-10">
        <h3 className="font-semibold">Booking List</h3>
      </div>

      <ListingTable
        tableHead={["_id", "status", "user", "tourPackage"]}
        data={allBookingData}
        obj={{ _id: 1, status: 1, user: 1, tourPackage: 1 }}
      />
    </div>
  );
};

export default AdminBookingListing;
