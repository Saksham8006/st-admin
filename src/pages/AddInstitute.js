import React from 'react'
import { NavLink } from 'react-router-dom'

const AddInstitute = () => {
  return (

      <section className="bg-gray-50  ml-[256px] min-h-screen flex items-center justify-center ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[500px]">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Add Institute
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-white ">Add Institute</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 
                      focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="institute name" required=""></input>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium  dark:text-white">Add Location</label>
                      <input type="password" name="password" id="password" placeholder="location name" className="bg-gray-50 border border-gray-300 text-gray-900
                       sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    
                    
                  </div>
                  <button type="submit" className="w-full text-white  focus:ring-4  bg-green-500
                   focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 hover:bg-green-600
                   dark:focus:ring-primary-800">Add Institute</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  
  )
}

export default AddInstitute