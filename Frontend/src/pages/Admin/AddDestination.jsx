import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategories,
} from "../../redux/slices/categorySlice";
import { postNewDestination } from "../../redux/slices/destinationSlice";
import { useNavigate } from "react-router-dom";
import TagInput from "../../components/TagInput";
import { fetchAllTourPackages } from "../../redux/slices/tourPackageSlice";

let init = {
  name: "",
  price: 0,
  type: "",
  image: "",
  description: "",
  category: [],
  tourPackages: [],
};

const AddDestination = () => {
  const [formData, setFormData] = useState(init);
  const [tags, setTags] = useState([]);
  const [tagIds, setTagIds] = useState([]);

  const { allCategoryData } = useSelector((store) => store.category);
  const { allTourPackageData } = useSelector((store) =>  store.tourPackage);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(postNewDestination(formData));
    setFormData(init);
    navigate("/admin/destination");
  };

  const userInputHandler = (e) => {
    let { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: name === "category" ? tagIds : value,
    }));
  };


  const tagInputHandler = (e) => {
    const value = e.target.value;

    const categoryName = allCategoryData.find(
      (category) => category._id === value
    ).name;

    if (!tags.find((tag) => tag === categoryName)) {
      setTags((prevTags) => [...prevTags, categoryName]);
      setTagIds((prevTagIds) => [...prevTagIds, value]);
    }
  };


  const onChangeHandler = (e) => {
    tagInputHandler(e);
    userInputHandler(e);
  };

  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchAllTourPackages());
  }, []);


  return (
    <div className="px-10 h-screen py-16">
      <h2 className="text-cyan-800 text-2xl font-bold ">Add Destination</h2>

      <form onSubmit={submitHandler} className="flex flex-col w-80 gap-6">
        <label htmlFor="">
          Enter Destination Name
          <input
            type="text"
            placeholder="Type Destination Name"
            name="name"
            value={formData.name}
            onChange={userInputHandler}
            className="border border-cyan-800 p-2 w-full"
          />
        </label>

        <label htmlFor="">
          Enter Destination Price
          <input
            type="number"
            placeholder="Type Destination Price"
            name="price"
            value={formData.price}
            onChange={userInputHandler}
            className="border border-cyan-800 p-2 w-full"
          />
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={userInputHandler}
          className="border border-cyan-800 p-2"
        >
          <option value="">Choose Destination Type</option>
          <option value="Domestic">Domestic</option>
          <option value="International">International</option>
        </select>

        {/* Update: Uploading images from system and convert them through Multer */}
        <label htmlFor="">
          Enter Destination Image
          <input
            type="text"
            placeholder="Type Image Url"
            name="image"
            value={formData.image}
            onChange={userInputHandler}
            className="border border-cyan-800 p-2 w-full"
          />
        </label>

        <label htmlFor="">
          Choose Categories
          <div className="my-2">
            {tags.length > 0 && <TagInput tags={tags} />}
          </div>
          <select
            name="category"
            value={formData.category}
            onChange={onChangeHandler}
            // onChange={userInputHandler}
            className="border border-cyan-800 p-2 w-full"
          >
            {allCategoryData &&
              allCategoryData.length > 0 &&
              allCategoryData.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="">
          Enter Destination Description {`(Optional)`}
          <input
            type="text"
            placeholder="Type Description"
            name="description"
            value={formData.description}
            onChange={userInputHandler}
            className="border border-cyan-800 p-2 w-full"
          />
        </label>

        <button
          type="submit"
          className="font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDestination;
