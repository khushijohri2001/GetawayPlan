import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Search = () => {
    return (
        <div className='my-8 flex'>
            <div className='min-w-52 w-full h-[2.3rem] border border-cyan-800 bg-white  flex items-center justify-between px-2'>
                <FaLocationDot className="text-lg" />
                <input type="text" className='w-full h-full ml-2' placeholder="Type your Destination" />
            </div>

            <select className='min-w-52 w-full p-2 border-y border-cyan-800 bg-white'>
                <option value="">Select Duration</option>
                <option value="1-3 Days">1-3 Days</option>
                <option value="5-7 Days">5-7 Days</option>
                <option value="10-12 Days">10-12 Days</option>
                <option value="15 Days and more">14 Days and more</option>
                <option value="Not Decided">Not Decided</option>
            </select>

            <div className='min-w-52 w-full h-[2.3rem] border border-cyan-800 bg-white  flex items-center justify-between px-2'>
                <SlCalender className="text-lg" />
                <input type="text" className='w-full h-full ml-2' placeholder="Choose a Date" />
            </div>

            <button className='bg-cyan-500 text-white font-bold px-8 py-1 h-[2.25rem] min-w-48 w-full'>Explore</button>
        </div>
    )
}

export default Search