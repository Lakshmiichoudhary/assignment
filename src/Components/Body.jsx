import React from 'react'

const Body = () => {
  return (
    <div className="mt-20">
        <div className='flex '>
        <div className='text-center lg:ml-96 ml-9'>
            <h1 className='font-bold text-2xl'>Start Building Your Organization</h1>
            <p className='mt-4'>
                Invite user to unlock unique team sheduling features starting as low as $12 per user/mo.
            </p>
            <button className='mt-4 bg-blue-600 p-3 hover:bg-blue-700 rounded-full text-white'>
                Invite Users
            </button>
        </div>
        <div>
            <button className='transform -rotate-90 mt-20 p-3 shadow-xl from-black lg:ml-80'>
                Feedback
            </button>
        </div>
        </div>
        <div className='lg:ml-56 ml-5 lg:mt-32 mt-12'>
            <h1>What can I do as a team?</h1>
            <div className='lg:flex mx-6'>
                <div className='m-6 lg:flex shadow-lg from-black'>
                    <img className='h-28 w-32'
                    src='https://www.preact.co.uk/media/images/media/_300x300_crop_center-center_none_ns/rrobinf.jpg'
                    alt='img' />
                    <div>
                    <h1 className='font-bold'>Round Robin Scheduling</h1>
                    <p className='mt-4 w-60'>
                        Automatically assign the meeting based on what makes the most sense
                        for your team goals - weather by availability priority or equity. 
                    </p>
                    <p className=' text-blue-500 mt-8 cursor-pointer'>watch video</p>
                    </div>
                </div>
                <div className='m-6 mx-8 lg:flex shadow-lg from-black'>
                    <img className='h-28 w-32'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6HvVpxWUwH295_fulCrBekfKCbRLdRl31VHqDWjWlQ&s'
                    alt='img' />
                    <div>
                    <h1 className='font-bold'>Access Powerful management Tool</h1>
                    <p className='mt-4 w-60'>
                       Get new and existing users upto speed and engaged
                       with event type templets to make sure everyone's set  
                       up for efficient scheduling, all managed through one 
                       centerlized billing solution.
                    </p>
                    <p className=' text-blue-500 mt-8 cursor-pointer'>watch video</p>
                    </div>
                </div>
                <div className="ml-16">
                <button className="p-4 bg-gray-700 rounded-md text-white relative">
                    Getting started
                    <sup className="absolute top-0 right-0 flex items-center justify-center bg-red-600 rounded-full w-6 h-6 text-sm text-white">
                    3
                </sup>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
