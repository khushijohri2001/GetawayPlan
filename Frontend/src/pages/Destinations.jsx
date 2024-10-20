import React, { useEffect } from "react";
import DestinationCard from "../components/Cards/DestinationCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDestinations } from "../redux/slices/destinationSlice";

const Destinations = () => {
  const { categoryId } = useParams();
  const { allDestinationData } = useSelector((store) => store.destination);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllDestinations());
  }, []);

  return (
    <div>
      <div>Filter</div>
      <div>
        <h2>Destinations</h2>
        <div className="flex flex-wrap gap-6">
          {allDestinationData &&
            allDestinationData.length > 0 &&
            (categoryId === "destinations"
              ? allDestinationData.map((destination) => (
                  <DestinationCard
                    key={destination._id}
                    route={categoryId}
                    data={destination}
                  />
                ))
              : allDestinationData
                  .filter((ele) =>
                    ele.category.some((elem) => elem.name === categoryId)
                  )
                  .map((destination) => (
                    <DestinationCard
                      key={destination._id}
                      route={categoryId}
                      data={destination}
                    />
                  )))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
