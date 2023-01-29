import React,{ useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import TextConversion from '../pages/AddInstitute';
import Home from '../pages/Home';

import Queries from '../pages/Queries';
import Scope from '../pages/Scope';



const Sidebar = () => {

    const [val, setVal] = useState(0)

    const navigate = useNavigate();


    useEffect(() => {
		const loggedInStatus = localStorage.getItem('loggedInStatus')
			if (!loggedInStatus) {
				navigate('/login')
			} 
           
	}, [])

    async function logout(event) { 
        localStorage.removeItem('loggedInStatus')
        navigate('/login')

    }

  return (
    <aside className="fixed top-0 left-0  w-64 h-screen" aria-label="Sidebar">
    <div className="h-screen  pt-[50px]  px-3 bg-gray-50  dark:bg-gray-800">
           <div> <img src="./assets/images/logo.svg" className="inline mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RateMyInstitute</span>
            </div>
        <ul className=" mt-[50px] space-y-2">
        <NavLink to='/' onClick={() => setVal(0)}>  <li>

                <div  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#48F4FF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Dashboard</span>
                </div>
            </li>
            </NavLink>
       

            <NavLink to='/addInstitute' onClick={() => setVal(2)}> <li>
                <div to="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#48F4FF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Add Institute</span>
                {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> */}
                </div>
            </li></NavLink>

            <NavLink to='/contact' onClick={() => setVal(3)}> <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#48F4FF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Queries</span>
                </div>
            </li></NavLink>

            <NavLink to='/scope' > <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#48F4FF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Future Scope</span>
                </div>
                </li></NavLink>

                

               <li><NavLink 
               onClick= {logout}
               className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="#48F4FF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </NavLink>
                </li>

              
           
        </ul>
       
    </div>
    {val === 0 && <Home />}
    
     {val === 1 && <TextConversion />}
     {val === 2 && <Queries />}
     {val === 3 && <Scope />}
    
    </aside>
  
  )
}

export default Sidebar