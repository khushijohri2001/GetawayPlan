import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../redux/slices/categorySlice";
import { fetchAllDestinations } from "../../redux/slices/destinationSlice";
import { useNavigate } from "react-router-dom";
import { postNewTourPackage } from "../../redux/slices/tourPackageSlice";

let init = {
  name: "",
  category: "",
  destination: "",
  duration: {
    days: 0,
    nights: 0
  },
  price: 0,
  description: "",
  image: "",
}

const AddTourPackage = () => {
  const [formData, setFormData] = useState(init);
  const [checked, setChecked] = useState(false)
  const { allCategoryData } = useSelector((store) => store.category);
  const { allDestinationData } = useSelector((store) => store.destination);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(postNewTourPackage(formData));

    setFormData(init);
    navigate("/admin/tour-package")
  }

  const userInputHandler = (e) => {
    let { name, value } = e.target;


    if (name.includes("duration")) {
      const secondKey = name.split(".")[1]
      setFormData(data => ({ ...data, duration: secondKey === "days" ? { ...data.duration, days: value } : { ...data.duration, nights: value } }))
    }
    else {

      setFormData(data => ({ ...data, [name]: value }))
    }
  }


  useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllDestinations())
  }, [])

  return (
    <div className='px-10 h-screen py-16'>
      <h2 className='text-cyan-800 text-2xl font-bold '>Add Tour Packages</h2>

      <form onSubmit={submitHandler} className='flex flex-col w-80 gap-6' >
        {/* Name */}
        <label htmlFor="">Enter Tour Package Name
          <input type="text" placeholder="Type Tour Package Name" name="name" value={formData.name} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
        </label>

        {/* Category */}
        <select name="category" value={formData.category} onChange={userInputHandler} className='border border-cyan-800 p-2' >
          <option value="">Choose Tour Package Category</option>
          {
            allCategoryData && allCategoryData.length > 0 && allCategoryData.map((category) => <option key={category._id} value={category._id}>{category.name}</option>)
          }
        </select>

        {/* Destination */}
        <select name="destination" value={formData.destination} onChange={userInputHandler} className='border border-cyan-800 p-2' >
          <option value="">Choose Tour Package Destination</option>
          {
            allDestinationData && allDestinationData.length > 0 && allDestinationData.map((destination) => <option key={destination._id} value={destination._id}>{destination.name}</option>)
          }
        </select>

        {/* Duration */}
        <label htmlFor="">Enter Tour Package Duration
          <input type="number" placeholder="Type Duration Days" name="duration.days" value={formData.duration.days} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
          <input type="number" placeholder="Type Duration Nights" name="duration.nights" value={formData.duration.nights} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
        </label>

        {/* Price */}
        <label htmlFor="">Enter Tour Package Price
          <input type="number" placeholder="Type Tour Package Price" name="price" value={formData.price} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
        </label>

        {/* Description */}
        <label htmlFor="">Enter Tour Package Description
          <textarea type="text" placeholder="Type Tour Package Description" name="description" value={formData.description} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
        </label>

        {/* Image */}
        {/* Update: Uploading images from system and convert them through Multer */}
        <label htmlFor="">Enter Tour Package Image
          <input type="text" placeholder="Type Image Url" name="image" value={formData.image} onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
        </label>

        <button type="submit" className="font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">Submit</button>
      </form>
    </div>
  )
}

export default AddTourPackage
