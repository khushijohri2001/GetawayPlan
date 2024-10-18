import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/userSlice";

let init = {
    email: "",
    password: ""
}

const Login = () => {
    const [formData, setFormData] = useState(init);

    const {isAuthenticate} = useSelector((store) => store.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(loginUser(formData));
        console.log(formData);
       
        
        
        // setFormData(init);
        // navigate("/admin")
    }
    console.log(isAuthenticate);

    const userInputHandler = (e) => {
        let { name, value } = e.target;

        setFormData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='w-full p-10'>
            <h2 className='text-center mb-16 text-2xl font-bold'>Login Form</h2>
            <form className="max-w-sm mx-auto" onSubmit={submitHandler}>
                {/* Email */}
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required onChange={userInputHandler} />
                </div>

                {/* Password */}
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" name="password" value={formData.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={userInputHandler} />
                </div>
                {/* <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Login