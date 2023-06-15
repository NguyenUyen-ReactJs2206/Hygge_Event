import { useState } from 'react'
import logo from '../../assets/images/logopng.png'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

export default function NavHeader() {
  const [open, setOpen] = useState(false)
  return (
    <div className='container'>
      <div className='flex items-center justify-between font-medium'>
        <div className='z-50 flex w-full justify-between p-7 md:w-auto'>
          <img src={logo} alt='logo' className='h-9 md:cursor-pointer' />
          <button className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            {open ? 'close' : 'menu'}
          </button>
        </div>
        <ul className='hidden items-center text-[13px] font-semibold uppercase tracking-wider text-blue md:flex md:gap-0 lg:gap-4 lg:text-sm'>
          <li>
            <NavLink
              to={path.home}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.aboutUs}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.concept}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Concept
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.gallery}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.testimonials}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.blog}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={path.contact}
              className={({ isActive }) =>
                `inline-block py-5 hover:text-blue/50 md:px-2 lg:px-4 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='hidden md:block'>
          <button className='rounded-full px-6 py-2 text-black'>Get Started</button>
        </div>
        <ul
          className={`fixed right-0 top-0 z-0 mt-[93px] grid w-full gap-x-8 overflow-y-auto bg-white px-8 py-2 text-center text-sm font-light tracking-wide text-blue shadow-sm duration-500 sm:grid-cols-3 sm:py-4 sm:text-lg md:hidden 
            ${open ? 'top-0' : 'top-[-100%]'}`}
        >
          {/* className={`fixed bottom-0 top-0 mt-[94px] w-full overflow-y-auto bg-white py-6 pl-4 text-lg text-blue/70 text-cyan-500 duration-500 md:hidden 
          ${open ? 'left-0' : 'left-[-100%]'}`} */}
          <li className='sm:border-b sm:border-b-blue/30'>
            <NavLink
              to={path.home}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50 ' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30'>
            <NavLink
              to={path.aboutUs}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30'>
            <NavLink
              to={path.concept}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Concept
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30 '>
            <NavLink
              to={path.gallery}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30 '>
            <NavLink
              to={path.testimonials}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30 '>
            <NavLink
              to={path.blog}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li className='sm:border-b sm:border-b-blue/30'>
            <NavLink
              to={path.contact}
              className={({ isActive }) =>
                `inline-block px-6 py-1 hover:text-blue/50 ${isActive ? 'text-blue/50' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
