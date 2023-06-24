import { useState } from 'react'
import logo from '../../assets/images/logopng.png'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

export default function NavHeader() {
  const [open, setOpen] = useState(false)
  return (
    <div className='mb-[94px]'>
      <nav className='fixed top-0 z-[999999999999] w-full border-b border-b-gray/10 bg-white shadow-sm'>
        <div className='container'>
          <div className='flex items-center justify-between font-medium'>
            <div className='flex w-full justify-between p-7 md:w-auto'>
              <img src={logo} alt='logo' className='h-9 md:cursor-pointer' />
            </div>
            <div>
              <button className='lg:hidden' onClick={() => setOpen(!open)}>
                {open ? (
                  <div className='h-8 w-10 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-full w-full'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </div>
                ) : (
                  <div className='h-8 w-10 cursor-pointer'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-full w-full'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            </div>
            <ul className='hidden w-max items-center gap-4 font-semibold uppercase tracking-wider text-blue lg:flex lg:text-sm'>
              <li>
                <NavLink
                  to={path.home}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.aboutUs}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.concept}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Concept
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.gallery}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.testimonials}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.blog}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={path.contact}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <span className='cursor-pointer py-1 pl-5 hover:text-blue/50 hover:duration-300'>EN</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul
        className={`fixed right-0 top-0 z-[9999] grid w-full overflow-y-auto bg-white px-8 py-2 text-center text-lg tracking-wide text-blue shadow-sm duration-1000  lg:hidden 
            ${open ? 'top-0 mt-[93px] duration-[1000ms]' : 'top-[-100%] duration-1000'}`}
      >
        {/* className={`fixed bottom-0 top-0 mt-[94px] w-full overflow-y-auto bg-white py-6 pl-4 text-lg text-blue/70 text-cyan-500 duration-500 md:hidden 
          ${open ? 'left-0' : 'left-[-100%]'}`} */}
        <li className=''>
          <NavLink
            to={path.home}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className=''>
          <NavLink
            to={path.aboutUs}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li className=''>
          <NavLink
            to={path.concept}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Concept
          </NavLink>
        </li>
        <li className=' '>
          <NavLink
            to={path.gallery}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li className=' '>
          <NavLink
            to={path.testimonials}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Testimonials
          </NavLink>
        </li>
        <li className=' '>
          <NavLink
            to={path.blog}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Blog
          </NavLink>
        </li>
        <li className=''>
          <NavLink
            to={path.contact}
            className={({ isActive }) =>
              `inline-block px-6 py-1 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
