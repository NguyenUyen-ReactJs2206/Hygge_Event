import { Link } from 'react-router-dom'
import logo from '../../assets/images/logopng.png'
import path from '../../constants/path'
import UnderLineEffect from '../UnderlineEffect'
import { Link as ScrollLink } from 'react-scroll'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='bg-blueFooterOne'>
        <div className='container'>
          <div className='px-8 pt-12 sm:px-16 sm:pt-16 md:px-24 lg:px-52 xl:px-60'>
            <div className='logo mb-2 ml-auto mr-auto h-[30%] w-[30%]'>
              <img src={logo} alt='logo' className=' h-full w-full object-cover' />
            </div>
            <div className='z-[-1] hidden items-center py-1 leading-loose sm:flex sm:justify-between'>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.home}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Home
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.aboutUs}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    About Us
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.concept}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Concept
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.gallery}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Gallery
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.testimonials}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Testimonials
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.blog}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Blog
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
              <div className='group relative'>
                <ScrollLink to='top'>
                  <Link
                    to={path.contact}
                    className='py-1 text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-100/90 hover:duration-300 md:font-bold md:tracking-widest '
                  >
                    Contact
                  </Link>
                  <UnderLineEffect color='white' />
                </ScrollLink>
              </div>
            </div>
            <div className='pb-6 pt-2 sm:pb-12 sm:pt-6'>
              <div className='text-center text-sm text-white sm:text-left'>
                165/43 Nguyen Thai Binh, Nguyen Thai Binh Ward, District 1, Ho Chi Minh City, Vietnam.
              </div>
              <div className='text-center text-sm text-white sm:flex sm:justify-between'>
                <div>info.artofhygge@gmail.com</div>
                <div className='font-semibold'>+84(0) 909 106 320</div>
              </div>
            </div>
            <div className='py-4 sm:py-6'>
              <div className='flex items-center justify-center'>
                <Link to='/' className='mr-4 fill-white/90'>
                  <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512' className='h-6 w-6'>
                    <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
                  </svg>
                </Link>
                <Link to='/' className='fill-white/90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='1</ScrollLink>em'
                    viewBox='0 0 448 512'
                    className='h-6 w-6'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                  </svg>
                </Link>
                <Link to='/' className='ml-4 fill-white/90'>
                  <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512' className='h-6 w-6'>
                    <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blueFooterTwo py-5 text-center text-[14px] text-white'>@ 2023. All rights reserved</div>
    </div>
  )
}
