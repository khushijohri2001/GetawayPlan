import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser, resetError } from "../redux/slices/userSlice";

let init = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(init);

  const { isAuthenticated, singleUserData, error } = useSelector(
    (store) => store.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const isAdminRoute = currentPath.includes("admin");

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));

    setFormData(init);
  };

  const userInputHandler = (e) => {
    let { name, value } = e.target;

    setFormData((data) => ({ ...data, [name]: value }));
    dispatch(resetError());
  };

  useEffect(() => {
    if (isAuthenticated && singleUserData){
      if(isAdminRoute){
        navigate("/admin");
      } else{
        navigate("/")
      }
    } 
  }, [isAuthenticated, singleUserData, isAdminRoute]);

  return (
    <div className="w-full p-10">
      <h2 className="text-center mb-16 text-2xl font-bold">
        {isAdminRoute && "Admin "}Login Form
      </h2>
      <form className="max-w-sm mx-auto" onSubmit={submitHandler}>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
            onChange={userInputHandler}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={userInputHandler}
          />
        </div>

        {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Forget Password
          </label>
        </div> */}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>

        <div className="my-5">{error && error}</div>

        <div className="flex items-start my-5 text-sm font-medium">
          Create an account?{" "}
          <span className="text-cyan-500 px-2">
            <Link to="/admin/signup">Sign up now</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
