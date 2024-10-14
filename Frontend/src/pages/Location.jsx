import axios from "axios";
import { useState } from "react";

const Location = () => {
    const [formData, setFormData] = useState();


    const submitHandler = async (e) => {
        e.preventDefault();
        
       await axios.post('http://localhost:8800/destination/new', formData)
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
            <h2 className='text-cyan-800 text-2xl font-bold '>Add Location</h2>

            <form action="" onSubmit={submitHandler} className='flex flex-col w-52 gap-6' >
                <input type="text" placeholder="Type Location Name" name="name" onChange={userInputHandler} className='border border-cyan-800 p-2' />

                <input type="number" placeholder="Type Location Price" name="price" onChange={userInputHandler} className='border border-cyan-800 p-2' />

                <select placeholder="Choose Location Type" name="type" onChange={userInputHandler} className='border border-cyan-800 p-2' >
                    <option value="Domestic">Domestic</option>
                    <option value="International">International</option>
                </select>

                {/* Update: Uploading images from system and convert them through Multer */}
                <input type="text" placeholder="Enter Image Url" name="image" onChange={userInputHandler} className='border border-cyan-800 p-2' />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Location