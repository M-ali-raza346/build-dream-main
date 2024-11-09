import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Staff = () => {
  const teamMembers = [
    { name: 'Lionel Wurtch Bach', role: 'SENIOR ENGINEER', image: '/eng4.png' },
    { name: 'John Buffer', role: 'SENIOR ENGINEER', image: '/eng4.png' },
    { name: 'Mick Nintido', role: 'SENIOR ENGINEER', image: '/eng4.png' },
  ];

  return (
    <div className='flex flex-col h-[800px] w-full justify-center items-center text-center bg-slate-100'>
      <div>
        <h1 className='text-lg text-custom-yellow font-bold'>
          TEAM & STAFF<br />
          <span className='text-5xl text-black font-semibold'>Qualified Engineers</span>
        </h1>
      </div>
      <div className='flex flex-row gap-5 mt-8'>
        {teamMembers.map((member, index) => (
          <div key={index} className='relative group'>
            {/* Image */}
            <img src={member.image} alt={member.name} className='h-[590px] rounded-2xl' />

            {/* Social Media Icons */}
            <div className='absolute top-5 left-5 flex flex-col gap-3 mt-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <a href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-blue-500'>
                <FaTwitter size={30} />
              </a>
              <a href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-blue-600'>
                <FaFacebook size={30} />
              </a>
              <a href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-pink-500'>
                <FaInstagram size={30} />
              </a>
            </div>

            {/* Name and Role with Hover Background */}
            <div className='bg-gray-800 h-[130px] w-full flex flex-col justify-center items-center rounded-b-2xl transition-colors duration-300 group-hover:bg-yellow-500'>
              <h1 className='pt-2 text-white text-2xl font-bold'>{member.name}</h1>
              <h4 className='pt-3 text-white text-lg'>{member.role}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
