import React, { useEffect } from "react";
import DestinationCard from "../components/Cards/DestinationCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDestinations } from "../redux/slices/destinationSlice";
import Filter from "../components/Filters/Filter";

const Destinations = () => {
  const { categoryId } = useParams();
  const { filteredDestinations } = useSelector((store) => store.destination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDestinations());
  }, []);

  const filterCategory = filteredDestinations && filteredDestinations
    .filter((ele) =>
      ele.category.some((elem) => elem.name === categoryId)
    )


  return (
    <div className="flex gap-16 p-8 min-h-screen">
      <div>
       <Filter />
      </div>
      <div>
        <h2 className="text-2xl text-cyan-900 font-bold my-4 mb-8">
          {categoryId === "destinations" ? "All" : categoryId} Destinations
        </h2>
        <div className="flex flex-wrap gap-10">
          {filteredDestinations &&
            filteredDestinations.length > 0 &&
            (categoryId === "destinations"
              ? filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination._id}
                  route={categoryId}
                  data={destination}
                />
              ))
              : (filterCategory.length > 0 ? filteredDestinations
                .filter((ele) =>
                  ele.category.some((elem) => elem.name === categoryId)
                )
                .map((destination) => (
                  <DestinationCard
                    key={destination._id}
                    route={categoryId}
                    data={destination}
                  />
                ))
                :
                <p>No Destinations Available</p>
              )
            )

          }
        </div>
      </div>
    </div>
  );
};

export default Destinations;
