import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className='shadow-xl from-black'>
        <div className='lg:flex justify-between lg:mx-52'>
            <img className='p-3 w-24 h-20'
            src='https://static.vecteezy.com/system/resources/previews/011/151/237/original/blue-letter-c-logo-design-vector.jpg'
            alt='logo' />
            <div className='flex text-gray-500 lg:p-4 cursor-pointer'>
                <h3 className='lg:mx-4 mx-2 hover:text-black'>Home</h3>
                <h3 className='lg:mx-4 mx-2 hover:text-black'>Availability</h3>
                <h3 className='lg:mx-4 mx-2 hover:text-black'>Integration</h3>
                <h3 className='lg:mx-4 mx-2 hover:text-black'>Help <ArrowDropDownIcon/> </h3>
                <AccountCircleIcon />
                <h3 className='lg:mx-4 mx-2 hover:text-black'>Account <ArrowDropDownIcon/></h3>
            </div>
        </div>
        <div className='flex justify-between px-4 p-2 lg:mx-52'>
            <div className='lg:flex'>
            <h1 className="text-xl p-2 font-bold text-gray-900">
                Admin Management
            </h1>
            <span className="text-gray-500 p-3">1/1 seats occupied</span>
            </div>
            <div>
                <button className="font-bold text-blue-500 border-2 border-blue-500 p-2 lg:py-2 lg:px-4 rounded-full">
                    + New User
                </button>
            </div>
        </div>
        <div className='flex p-3 text-gray-500 cursor-pointer lg:mx-52'>
        <div className='hover:border-b-4 hover:border-blue-600'>
            <h3 className='mx-4 mb-4 hover:text-black'>All People</h3>
        </div>
        <div className='hover:border-b-4 hover:border-blue-600'>
            <h3 className='mx-4 mb-4 hover:text-black'>Groups</h3>
        </div>
        <div className='hover:border-b-4 hover:border-blue-600'>
            <h3 className='mx-4 mb-4 hover:text-black'>Manage events</h3>
        </div>
            <h3 className='lg:px-2 p-2 lg:py-0 mx-3 mb-4 text-white rounded-sm bg-blue-600 hover:bg-blue-700'>BETA</h3>
        </div>
    </div>
  )
}

export default Header
