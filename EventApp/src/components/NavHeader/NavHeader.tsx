import { useEffect, useState, useContext } from 'react'
import logo from '../../assets/images/logopng.png'
import { Link, NavLink } from 'react-router-dom'
import path from '../../constants/path'
import UnderLineEffect from '../UnderlineEffect'
import { AppContext } from 'src/contexts/app.context'
import { useTranslation } from 'react-i18next'

export default function NavHeader() {
  const { i18n, t } = useTranslation()

  const [isChangeLanguage, setIsChangeLanguage] = useState(false)

  const { setLoading, handleNextPage } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    setShowNav(() => (currentScrollPos === 0 ? false : true))
    setOpen(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNextPageMobie = () => {
    setOpen(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const changeLanguage = (lng: 'vi' | 'en') => {
    i18n.changeLanguage(lng)
    setIsChangeLanguage(!isChangeLanguage)
  }

  return (
    <>
      <div className='navigation-bar'>
        <nav className='fixed top-0 z-[99999] w-full bg-white text-blue opacity-100 transition-all duration-[700ms] lg:bg-transparent '>
          <div className='container'>
            <div className='flex items-center justify-between font-medium'>
              <Link
                to={path.home}
                onClick={handleNextPage}
                className='flex w-full justify-between p-2 lg:w-auto lg:p-4'
              >
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

              <ul className='hidden w-max items-center gap-5 font-extrabold uppercase tracking-wide text-blue lg:flex lg:text-sm'>
                <li className='group relative '>
                  <NavLink
                    to={path.home}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('home')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.aboutUs}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('aboutus')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.concept}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('concept')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.gallery}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('gallery')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.testimonials}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('testimonials')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.blog}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('blog')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.contact}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-blue hover:duration-300 ${
                        isActive ? 'text-[17px]' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('contact')}
                  </NavLink>
                  <UnderLineEffect color='blue' />
                </li>
                <li className='py-1 pl-5'>
                  <button
                    onClick={() => {
                      isChangeLanguage ? changeLanguage('en') : changeLanguage('vi')
                    }}
                    className='flex cursor-pointer items-center justify-center'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                      />
                    </svg>
                    <span className='w-8 cursor-pointer text-start hover:duration-300'>
                      {isChangeLanguage ? 'EN' : 'VI'}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav
          className={`fixed top-0 z-[99999] w-full bg-blue py-2 opacity-100 transition-all duration-[700ms]
     ${showNav ? 'visible transition-all duration-[700ms]' : 'invisible translate-y-[-100%] duration-[700ms]'}`}
        >
          <div className='container'>
            <div className='flex items-center justify-between font-medium'>
              <Link
                to={path.home}
                onClick={handleNextPage}
                className='flex w-full justify-between p-2 lg:w-auto lg:p-4'
              >
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

              <ul className=' hidden w-max items-center gap-5 font-extrabold uppercase tracking-wide text-white lg:flex lg:text-sm'>
                <li className='group relative '>
                  <NavLink
                    to={path.home}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80  hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('home')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.aboutUs}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('aboutus')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.concept}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('concept')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.gallery}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('gallery')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.testimonials}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('testimonials')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.blog}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('blog')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='group relative'>
                  <NavLink
                    to={path.contact}
                    className={({ isActive }) =>
                      `inline-block py-1 tracking-widest hover:text-white/80 hover:duration-300 ${
                        isActive ? 'text-white/80' : ''
                      }`
                    }
                    onClick={handleNextPage}
                  >
                    {t('contact')}
                  </NavLink>
                  <UnderLineEffect color='white' />
                </li>
                <li className='py-1 pl-5'>
                  <button
                    onClick={() => {
                      isChangeLanguage ? changeLanguage('en') : changeLanguage('vi')
                    }}
                    className='flex cursor-pointer items-center justify-center'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                      />
                    </svg>
                    <span className='w-8 cursor-pointer text-start hover:duration-300'>
                      {isChangeLanguage ? 'EN' : 'VI'}
                    </span>
                  </button>
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
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 pb-2 pt-6 hover:text-blue/50 hover:duration-300 ${
                  isActive ? 'font-bold text-blue' : ''
                }`
              }
            >
              {t('home')}
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to={path.aboutUs}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('aboutus')}
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to={path.concept}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('concept')}
            </NavLink>
          </li>
          <li className=' '>
            <NavLink
              to={path.gallery}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('gallery')}
            </NavLink>
          </li>
          <li className=' '>
            <NavLink
              to={path.testimonials}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('testimonials')}
            </NavLink>
          </li>
          <li className=' '>
            <NavLink
              to={path.blog}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('blog')}
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to={path.contact}
              onClick={handleNextPageMobie}
              className={({ isActive }) =>
                `inline-block px-6 py-2 hover:text-blue/50 hover:duration-300 ${isActive ? 'font-bold text-blue' : ''}`
              }
            >
              {t('contact')}
            </NavLink>
          </li>
          <li className='flex items-center justify-center py-2'>
            <button
              onClick={() => {
                isChangeLanguage ? changeLanguage('en') : changeLanguage('vi')
              }}
              className='flex cursor-pointer items-center justify-center text-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span className='w-8 cursor-pointer text-start hover:text-blue hover:duration-300'>
                {isChangeLanguage ? 'EN' : 'VI'}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
