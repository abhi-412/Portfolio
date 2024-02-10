import {React,useState} from 'react'
import { Link } from 'react-router-dom';

const NavLinks = [{name: "About" , to:"#about"},{name: "Education" , to:"#education"},{name:"Skills", to:"#skills"},{name:"Projects", to:"#projects"},{name: "Contact" , to:"#contact"}];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = ()=>{
    setToggleNav(!toggleNav);
  }
  return (
<nav className="bg-black fixed top-0 left-0 z-[999] w-full">
  <div className="px-5  sm:px-6 lg:px-12">
    <div className="flex items-center justify-between h-20">
      <div className="flex items-center p-0 w-48 md:w-full">
        <div>
          <h2 className='md:text-5xl text-2xl font-bold'>PORT<span className='text-cyan-600'>FOLIO</span></h2>
        </div>
        <div className="hidden w-full md:block">
          <ul className="ml-10 flex justify-end space-x-4">
            {NavLinks.map((link,i)=>{
                return  <li key={i} className="text-gray-300 cursor-pointer hover:font-bold hover:text-cyan-300 px-3 py-2 rounded-md text-lg lg:text-2xl font-medium"> <a href={link.to} >{link.name}</a></li>

            })}
            
          </ul>
        </div>
      </div>
      
      <div className="-mr-2 flex md:hidden">
        <button type="button" 
          className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
          aria-controls="mobile-menu" 
          aria-expanded="false"
          onClick={handleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className={`${toggleNav === false ? "hidden": ""} md:hidden lg:hidden`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-start">
            {NavLinks.map((link,i)=>{
                return  <div key={i}><a  href={link.to} className="text-gray-300 hover:font-bold hover:text-cyan-400  px-3 py-2 rounded-md text-sm font-medium">{link.name}</a></div>
            
            })}
    </div>
  </div>
</nav>

  )
}

export default Header
