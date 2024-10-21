import React from 'react'
import {useSelector} from "react-redux";

const Header = () => {
  const {singleUserData} = useSelector((store) => store.user);

  return (
    <div className='flex items-center justify-between p-4 bg-gradient-to-r from-cyan-300 to-cyan-700'>
        <div className='text-xl font-bold text-cyan-800'>
            Dashboard
        </div>
        <div>
            {
              singleUserData ? <img src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg" alt="user" className="h-14 w-14 rounded-full" /> : <button>Log In</button>
            }
        </div>
    </div>
  )
}

export default Header