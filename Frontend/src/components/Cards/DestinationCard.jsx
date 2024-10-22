import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ data }) => {
  const { name, image, category, type, price } = data;

  return (
    <div className="inline-block border border-cyan-800 p-2 rounded shadow-lg">
      <img src={image} alt={name} className="h-36 w-56 mb-2" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-cyan-800 font-bold">{name}</p>
          <p className="text-green-600 font-bold">₹{price}</p>
        </div>
        <p className="text-sm">{type}</p>
        <button className="bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-900">
          <Link to={name}>View Tour Packages</Link>
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
