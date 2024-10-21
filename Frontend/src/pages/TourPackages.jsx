import { useLocation, useParams } from "react-router-dom";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllTourPackages } from "../redux/slices/tourPackageSlice";
import TourPackageCard from "../components/Cards/TourPackageCard";
import { fetchDestinationById } from "../redux/slices/destinationSlice";
import { fetchAllBookings } from "../redux/slices/bookingSlice";

const TourPackages = () => {
  const { categoryId, destinationId } = useParams();

  const { allTourPackageData } = useSelector((store) => store.tourPackage);
  const { singleDestinationData } = useSelector((store) => store.destination);
  const { singleUserData } = useSelector((store) => store.user);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTourPackages());
    dispatch(fetchDestinationById(destinationId));
  }, []);



  return (
    <div>
      <div className="relative">
        <div className="absolute h-96 w-full bg-black opacity-60"></div>
        <div className="text-6xl absolute text-white font-bold top-[40%] left-[25%]">
          {singleDestinationData?.name} Tour Packages
        </div>
        <img
          src={singleDestinationData?.image}
          alt=""
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="flex gap-10 flex-wrap m-8">
        {allTourPackageData &&
          allTourPackageData.length > 0 &&
          (categoryId === "destinations"
            ? allTourPackageData
              .filter((ele) => ele?.destination?.name === destinationId)
              .map((data) => <TourPackageCard key={data._id} data={data} userId={singleUserData._id} />)
            : allTourPackageData
              .filter(
                (ele) =>
                  ele?.destination?.name === destinationId &&
                  ele?.category?.name === categoryId
              )
              .map((data) => <TourPackageCard key={data._id} data={data} userId={singleUserData._id} />))}
      </div>
    </div>
  );
};

export default TourPackages;
