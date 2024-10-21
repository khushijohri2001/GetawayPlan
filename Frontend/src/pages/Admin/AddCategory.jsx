import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../../redux/slices/categorySlice";
import { useNavigate } from "react-router-dom";

let init = {
    name: "",
    image: ""
}

const AddCategory = () => {
    const [formData, setFormData] = useState(init);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(postNewCategory(formData))
        setFormData(init);
        navigate(-1)
    }

    const userInputHandler = (e) => {
        let { name, value } = e.target;

        setFormData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className=' py-16 h-screen'>
            <h2 className='text-cyan-800 text-2xl font-bold mb-6'>Add Category</h2>

            <form onSubmit={submitHandler} className='flex flex-col w-80 gap-6' >
                <label htmlFor="">Enter Category Name
                    <input type="text" name="name" value={formData.name} placeholder="Type Category Name" onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
                </label>

                {/* Update: Uploading images from system and convert them through Multer */}
                <label htmlFor="">Enter Image Url
                    <input type="text" name="image" value={formData.image} placeholder="Type Image Url" onChange={userInputHandler} className='border border-cyan-800 p-2 w-full' />
                </label>

                <button type="submit" className="font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">Submit</button>
            </form>
        </div>
    )

}

export default AddCategory
