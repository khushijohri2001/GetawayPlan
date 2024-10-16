import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../../redux/slices/categorySlice";

const AddCategory = () => {
    const [formData, setFormData] = useState();
    const dispatch  = useDispatch();


    const submitHandler = async (e) => {
        e.preventDefault();
        
        dispatch(postNewCategory(formData))
    //    await axios.post('http://localhost:8800/category/new', formData)
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    //     console.log(formData);

    }

    const userInputHandler = (e) => {
        let { name, value } = e.target;

        setFormData(data => ({ ...data, [name]: value }))

    }
    return (
        <div className=' py-16 h-screen'>
            <h2 className='text-cyan-800 text-2xl font-bold mb-6'>Add Category</h2>

            <form action="" onSubmit={submitHandler} className='flex flex-col w-52 gap-6' >
            <label htmlFor="">Enter Category Name
                <input type="text" placeholder="Type Category Name" name="name" onChange={userInputHandler} className='border border-cyan-800 p-2' />
            </label>

                {/* Update: Uploading images from system and convert them through Multer */}
                <label htmlFor="">Enter Image Url
                <input type="text" placeholder="Enter Image Url" name="image" onChange={userInputHandler} className='border border-cyan-800 p-2' />
                </label>

                <button type="submit" className="font-semibold bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700">Submit</button>
            </form>
        </div>
    )

}

export default AddCategory
