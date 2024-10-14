import axios from "axios";
import { useState } from "react";

const Category = () => {
    const [formData, setFormData] = useState();


    const submitHandler = async (e) => {
        e.preventDefault();
        
       await axios.post('http://localhost:8800/category/new', formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(formData);

    }

    const userInputHandler = (e) => {
        let { name, value } = e.target;

        setFormData(data => ({ ...data, [name]: value }))

    }
    return (
        <div className='px-10 h-screen py-16'>
            <h2 className='text-cyan-800 text-2xl font-bold '>Add Category</h2>

            <form action="" onSubmit={submitHandler} className='flex flex-col w-52 gap-6' >
                <input type="text" placeholder="Type Category Name" name="name" onChange={userInputHandler} className='border border-cyan-800 p-2' />

                {/* Update: Uploading images from system and convert them through Multer */}
                <input type="text" placeholder="Enter Image Url" name="image" onChange={userInputHandler} className='border border-cyan-800 p-2' />

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Category