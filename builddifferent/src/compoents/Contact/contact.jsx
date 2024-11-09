import React from 'react'
import "./contact.css";

const contact = () => {
  return (
    <div className='w-full h-[400px] bg-slate-100 '>
      <div className='w-full h-[300px] bg-black '>
      <span className="logo-bg4 absolute  left-0"></span>
 
      <div className='flex flex-row'>
        <div className='flex flex-col text-white  justify-center items-center h-[200px]'>
        <span className="logo-bg5 absolute  left-0"></span>
        <span className="logo-bg6 absolute  left-0"></span>
            <h3 className="font-semibold mt-14 ml-12 z-50">YOU MAY CONTACT US FOR CONSTRUCTION & RENOVATION WORK</h3>
            <h1 className='text-[40px]  text-black z-50'>We Are Great Construction <br />

            Company</h1>

        </div>
        <div className='h-[200px]'>
            <img src="/Group11.png" alt="" className='h-[300px] w-[700px] ml-[100px]'/>
            <button className='bg-custom-yellow py-3 px-4 ml-[430px] font-semibold text-white rounded-md -bottom-[1400px] absolute hover:bg-gray-500 '>Make An Appointment</button>
        </div>

      </div>
      
      </div>
    </div>
  )
}

export default contact
