import React from 'react'

const port = () => {
  return (
    <div className='flex flex-col h-[900px] w-full justify-center items-center text-center bg-slate-100'>
        <div>
          
            <h1 className='text-lg text-custom-yellow font-bold'>
            Portfolio<br />
          <span className='text-5xl text-black font-semibold'>Projects</span>
        </h1>
        </div>
      <div className='flex flex-row mt-16'>
        <img src="/2.png" alt="" className='w-[440px]'/>
        <img src="/1.png" alt="" className='w-[440px]'/>
        <img src="/3.png" alt="" className='w-[440px]'/>

      </div>
      <div className='flex flex-row '>
        <img src="/5.png" alt="" className='w-[440px]'/>
        <img src="/6.png" alt="" className='w-[440px]'/>
        <img src="/7.png" alt="" className='w-[440px]'/>

      </div>
    </div>
  )
}

export default port
