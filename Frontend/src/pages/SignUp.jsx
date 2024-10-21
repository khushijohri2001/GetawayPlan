import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { postNewUser } from "../redux/slices/userSlice";

let init = {
  name: "",
  phone: "",
  email: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(init);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { error } = useSelector((store) => store.user);
  const { singleUserData, isAuthenticated } = useSelector((store) => store.user);

  const currentPath = location.pathname;

  const isAdminRoute = currentPath.includes("admin");

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(postNewUser(formData));

    setFormData(init);
  };

  const userInputHandler = (e) => {
    let { name, value } = e.target;

    setFormData((data) => ({ ...data, [name]: value }));
  };


  useEffect(() => {
    if (isAuthenticated) {
      if (isAdminRoute ) {
        navigate("/admin/login");
      } else {
        navigate("/login")
      }
    }
  }, [isAuthenticated]);

  

  return (
    <div className="w-full p-10">
      <h2 className="text-center mb-16 text-2xl font-bold">{isAdminRoute && "Admin "}Signup Form</h2>
      <form className="max-w-sm mx-auto" onSubmit={submitHandler}>

        {/* Fullname */}
        <div className="mb-5">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Fullname
          </label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={userInputHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Fullname"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Phone Number
          </label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={userInputHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={userInputHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>

        {/* Username */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your username
          </label>
          <input
            type="username"
            name="username"
            value={formData.username}
            onChange={userInputHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="username"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={userInputHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>

        <div className="my-5">{error && error}</div>

        <div className="flex items-start my-5 text-sm font-medium ">
          Already an account? <span className="text-cyan-500 px-2">
            <Link to={isAdminRoute ? "/admin/login" : "/login"}>Login now</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
