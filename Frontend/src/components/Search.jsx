import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Slider from "@mui/material/Slider";

const Search = () => {
  const [range, setRange] = useState([2000, 200000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  return (
    <div className="relative my-16 bg-white h-30 py-12 pb-16 px-8 rounded-md">
      <div className="flex justify-between gap-8 w-full">
        <div className="flex flex-col gap-4">
          <label htmlFor="">Search your destination</label>
          <div className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent ">
            <input
              type="text"
              className="w-full h-full bg-gray-300 focus:outline-none"
              placeholder="Type your Destination "
            />
            <FaLocationDot className="text-lg" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="">Select Duration</label>
          <select className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent">
            <option value="">Select Duration</option>
            <option value="1-3 Days">1-3 Days</option>
            <option value="5-7 Days">5-7 Days</option>
            <option value="10-12 Days">10-12 Days</option>
            <option value="15 Days and more">14 Days and more</option>
            <option value="Not Decided">Not Decided</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="">
            The selected range is {range[0]} - {range[1]}
          </label>
          <div className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent">
            <Slider
              value={range}
              onChange={handleChanges}
              step={5000}
              min={2000} 
              max={200000}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
      </div>

      <button className="absolute -bottom-5 right-[40%] bg-cyan-600 text-white font-bold px-16 py-2 rounded-md text-xl hover:bg-cyan-700">
        Explore
      </button>
    </div>
  );
};

export default Search;
