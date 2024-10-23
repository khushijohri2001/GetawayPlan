import { useLocation, useParams } from "react-router-dom";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllTourPackages } from "../redux/slices/tourPackageSlice";
import TourPackageCard from "../components/Cards/TourPackageCard";
import { fetchDestinationById } from "../redux/slices/destinationSlice";

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

  const filterPackages = allTourPackageData && allTourPackageData
    .filter(
      (ele) =>
        ele?.destination?.name === destinationId &&
        ele?.category?.name === categoryId
    )

  return (
    <div>
      <div className="relative shadow-xl">
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

      {singleDestinationData?.description && <div className="m-6">
        <h4 className="text-cyan-800 text-lg font-bold">
          About {singleDestinationData?.name}
        </h4>
        <p>{singleDestinationData?.description}</p>
      </div>}

      <div className="flex gap-10 flex-wrap m-8">
        {allTourPackageData &&
          allTourPackageData.length > 0 &&
          (categoryId === "destinations"
            ? allTourPackageData
              .filter((ele) => ele?.destination?.name === destinationId)
              .map((data) => (
                <TourPackageCard
                  key={data._id}
                  data={data}
                  userId={singleUserData._id}
                />
              ))
            : filterPackages.length > 0 ?
            filterPackages.map((data) => (
                <TourPackageCard
                  key={data._id}
                  data={data}
                  userId={singleUserData._id}
                />
              ))
            :
            <p className="text-2xl my-8">No Packages Available</p>
            )}
      </div>
    </div>
  );
};

export default TourPackages;
