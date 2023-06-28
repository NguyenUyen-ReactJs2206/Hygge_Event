import { useEffect, useState } from 'react'
import logo from '../../assets/images/logopng.png'
import { Link, NavLink } from 'react-router-dom'
import path from '../../constants/path'
import UnderLineEffect from '../UnderlineEffect'

export default function NavHeader() {
  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    setShowNav(() => (prevScrollPos > currentScrollPos || currentScrollPos < 20 ? true : false))
    setOpen(false)
    setPrevScrollPos(currentScrollPos)
  }
  return (
    <div className='navigation-bar'>
      <nav
        className={`fixed top-0 z-[999999999999] w-full bg-white text-blue opacity-100 transition-all duration-[700ms]
         ${showNav ? 'visible transition-all duration-[700ms]' : 'invisible translate-y-[-100%] duration-[700ms]'}`}
      >
        <div className='container'>
          <div className='flex items-center justify-between font-medium'>
            <Link to={path.home} className='flex w-full justify-between p-2 lg:w-auto lg:p-4'>
              <img src={logo} alt='logo' className='h-9 md:cursor-pointer' />
            </Link>
            <div>
              {open && (
                <button className='lg:hidden' onClick={() => setOpen(false)}>
                  <div className='h-6 w-8 cursor-pointer'>
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
                </button>
              )}
              {!open && (
                <button className='lg:hidden' onClick={() => setOpen(true)}>
                  <div className='h-6 w-8 cursor-pointer'>
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
                </button>
              )}
            </div>

            <ul className='hidden w-max items-center gap-4 font-semibold uppercase tracking-wider text-blue lg:flex lg:text-sm'>
              <li className='group relative '>
                <NavLink
                  to={path.home}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.aboutUs}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  About Us
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.concept}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Concept
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.gallery}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Gallery
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.testimonials}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Testimonials
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.blog}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <NavLink
                  to={path.contact}
                  className={({ isActive }) =>
                    `inline-block py-1 tracking-widest text-blue hover:text-blue/50 hover:duration-300 ${
                      isActive ? 'text-blue/50' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
                <UnderLineEffect color='blue' />
              </li>
              <li className='group relative'>
                <span className='cursor-pointer py-1 pl-5 text-blue hover:text-blue/50 hover:duration-300'>EN</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul
        className={`fixed right-0 top-0 z-[999] w-full overflow-y-auto bg-white/90 px-8 py-2 text-center text-lg tracking-wide text-blue shadow-sm duration-500  lg:hidden
          ${open ? 'top-[50px] duration-500' : 'top-[-100%] duration-500'}`}
      >
        <li className=''>
          <NavLink
            to={path.home}
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
