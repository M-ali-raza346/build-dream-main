import React from 'react'

const pricing = () => {
  return (
    <div className='flex flex-col h-[700px] w-full justify-center items-center text-center bg-slate-100'>
    <div>
      
        <h1 className='text-lg text-custom-yellow font-bold'>
        Our Pricing<br />
      <span className='text-5xl text-black font-semibold'>Pricing & Pakages</span>
    </h1>
    </div>
      <div className='flex flex-row mt-9'>
        <div className='py-[40px] px-[60px] bg-white shadow shadow-gray-400 flex flex-col justify-center items-center '>
            <h3 className='font-semibold text-xl '>BASIC PLAN</h3>
            <img src="/p3.png" alt=""  className='w-24 my-6'/>
            <p className='text-start text-[#8C8C8C] my-5'>Far far away, behind the <br />
word mountains, far from <br />
the countries Vokalia and <br />
Consonantia, there live the <br />{""}
<span className='block text-center'>blind texts.</span></p>
<button className='py-2 px-5 rounded-md bg-custom-yellow text-white font-semibold hover:bg-gray-500'>GET STARTED</button>
        </div>
        <div className='py-[40px] px-[60px] bg-white shadow shadow-gray-400 flex flex-col justify-center items-center mx-10 '>
            <h3 className='font-semibold text-xl '>BEGINNER PLAN</h3>
            <img src="/p1.png" alt=""  className='w-24 my-6'/>
            <p className='text-start text-[#8C8C8C] my-5'>Far far away, behind the <br />
word mountains, far from <br />
the countries Vokalia and <br />
Consonantia, there live the <br />{""}
<span className='block text-center'>blind texts.</span></p>
<button className='py-2 px-5 rounded-md bg-custom-yellow text-white font-semibold hover:bg-gray-500'>GET STARTED</button>
        </div>
        <div className='py-[40px] px-[60px] bg-white shadow shadow-gray-400 flex flex-col justify-center items-center '>
            <h3 className='font-semibold text-xl '>PREMIUM PLAN</h3>
            <img src="/p2.png" alt=""  className='w-24 my-6'/>
            <p className='text-start text-[#8C8C8C] my-5'>Far far away, behind the <br />
word mountains, far from <br />
the countries Vokalia and <br />
Consonantia, there live the <br />{""}
<span className='block text-center'>blind texts.</span></p>
<button className='py-2 px-5 rounded-md bg-custom-yellow text-white font-semibold hover:bg-gray-500'>GET STARTED</button>
        </div>
      
      </div>
    </div>
  )
}

export default pricing
