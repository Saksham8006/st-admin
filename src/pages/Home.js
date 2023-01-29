import React from 'react'
import { MdRateReview } from 'react-icons/md'

const Home = () => {
  return (

    <>
     <div className='bg-sky-400 top-0 w-full justify-start ml-[256px] p-6'>
       <span className='text-3xl text-white font-bold ml-5  '> Hello Admin</span>
      </div>
   
    <div className='flex flex-col gap-y-3 items-center justify-center min-h-screen ml-[256px]'>

     
      <div>
        {/* Ist div */}
        <div className='bg-blue-300 rounded-xl p-3 w-[500px] flex flex-col gap-y-7'>
          <div className='text-5xl text-blue-400'> <MdRateReview /></div>
          <div className='flex gap-x-7 justify-between'>
            <span className='text-xl '>Total Reviews</span>
            <div className='rounded-xl text-3xl p-2 bg-blue-400 hover:scale-105 '>356</div>

          </div>
        </div>
      </div>

      <div>
        {/* second div */}
        <div className='bg-green-300 rounded-xl p-3 w-[500px] flex flex-col gap-y-7'>
          <div className='text-5xl text-green-400'> <MdRateReview /></div>
          <div className='flex gap-x-7 justify-between'>
            <span className='text-xl '>Accepted Reviews</span>
            <div className='rounded-xl text-3xl p-2 bg-green-400 hover:scale-105'>200</div>

          </div>
        </div>
      </div>
      <div>
        {/* third div */}
        <div className='bg-red-300 rounded-xl p-3 w-[500px] flex flex-col gap-y-7'>
          <div className='text-5xl text-red-400 '> <MdRateReview /></div>
          <div className='flex gap-x-7 justify-between'>
            <span className='text-xl '>Cancelled Reviews</span>
            <div className='rounded-xl text-3xl p-2 bg-red-400 hover:scale-105'>156</div>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home