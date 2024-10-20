/* eslint-disable react/prop-types */
import React from "react";
import { openPopup } from "../../redux/slices/tourPackageSlice";
import { useDispatch } from "react-redux";

const TourPackageCard = ({ data }) => {
  const { image, name, description, price, category, duration } = data || {};
  
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col justify-between my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div>
        <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover rounded-md"
          />
        </div>

        <div className="mx-4 my-3 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
          {category.name}
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center gap-8 justify-between">
            <p className="text-slate-800 text-xl font-semibold">{name}</p>
            <p className="text-cyan-600 text-xl font-semibold">₹{price}</p>
          </div>
          <p className="text-cyan-600 font-bold leading-normal mb-2 my-4">
            {duration.nights} Nights/ {duration.days} Days
          </p>

          <p className="text-slate-600 leading-normal font-light">
            {description}
          </p>
        </div>
      </div>

      <div className="m-4">
        <button
          className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourPackageCard;
