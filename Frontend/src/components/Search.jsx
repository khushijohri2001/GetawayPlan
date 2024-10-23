import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllCategories } from "../redux/slices/categorySlice";
import { fetchAllTourPackages, filteringTourPackages } from "../redux/slices/tourPackageSlice";

let init = {
  destination: "",
  duration: "",
  type: ""
};

const Search = () => {
  const [formData, setFormData] = useState(init);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {filteredTourPackage,allTourPackageData} = useSelector((store) => store.tourPackage)

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(filteringTourPackages({...formData,allTourPackageData}));
    
    navigate("/all-tour-packages")
  };


  const userInputHandler = (e) => {
    let { name, value } = e.target;   

    setFormData(data => ({ ...data, [name]: value }))
  };

  useEffect(() => {
    dispatch(fetchAllTourPackages())
  }, [])
// console.log(filteredTourPackage);

  
  

  return (
    <form className="relative my-16 bg-white h-30 py-12 pb-16 px-8 rounded-md" onSubmit={submitHandler}>
      <div className="flex justify-between gap-8 w-full">

        <div className="flex flex-col gap-4">
          <label htmlFor="">Search your destination</label>
          <div className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent ">
            <input
              type="text"
              className="w-full h-full bg-gray-300 focus:outline-none"
              placeholder="Type your Destination"
              name="destination"
              value={formData.destination}
              onChange={userInputHandler}
            />
            <FaLocationDot className="text-lg" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="">Select Duration</label>
          <select className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent" name="duration" value={formData.duration} onChange={userInputHandler}>
            <option value="">Select Duration</option>
            <option value="1-3">1-3 Days</option>
            <option value="4-7">4-7 Days</option>
            <option value="7-10">7-10 Days</option>
            <option value="10-15">10-15 Days</option>
            <option value="all">Not Decided</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="">Select Destination Type</label>
          <select className="flex items-center justify-between min-w-80 w-full h-[2.3rem] bg-gray-300 px-4 rounded-2xl border-transparent" name="type" value={formData.type} onChange={userInputHandler}>
            <option value="">Select Type</option>
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
          </select>
        </div>
      </div>

      <button type="submit" className="absolute -bottom-5 right-[40%] bg-cyan-600 text-white font-bold px-16 py-2 rounded-md text-xl hover:bg-cyan-700">
        Explore
      </button>
    </form>
  );
};

export default Search;
