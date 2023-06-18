import { Fragment } from 'react'
import { services } from '../../api/services.api'
import NavHeader from '../../components/NavHeader'

export default function Home() {
  return (
    <div>
      <nav className='fixed z-[999999] w-full border-b border-b-gray/10 bg-white shadow-sm lg:w-[1024px]'>
        <NavHeader />
      </nav>
      <div className='banner relative'>
        <img
          src='https://cdn0.weddingwire.ca/vendor/3632/3_2/960/jpg/1p2a3080_50_3632-161117907430780.jpeg'
          alt='banner'
          className='h-[60vh] w-full bg-banner bg-auto bg-fixed object-cover pt-20 sm:h-[70vh] md:h-[80vh] lg:pt-0 xl:h-[100vh]'
        />
        <div className='absolute bottom-0 left-0 h-[200px] w-[200px] bg-white sm:h-[40%] sm:w-[40%] lg:h-[280px] lg:w-[430px] xl:h-[300px] xl:w-[480px]'>
          <div className='mt-10 pl-10 sm:pr-10 md:pl-16 lg:mt-16 lg:pl-16 xl:pl-20'>
            <h3 className='text-lg font-semibold uppercase tracking-wider text-blue sm:text-xl sm:leading-[34px] md:text-3xl md:leading-[38px] lg:text-4xl lg:leading-[44px] xl:leading-[52px]'>
              Upside down concept
            </h3>
            <div className='mt-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue text-white hover:bg-blue/80'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='\ h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='py-32'>
        <div className='flex items-center justify-center'>
          <div className='relative max-w-[680px] px-12 py-6'>
            <div className='text-center'>
              <h3 className='mb-4 text-2xl font-semibold uppercase tracking-wider text-blue md:text-4xl'>
                What Hygge is about
              </h3>
              <p className='text-base md:text-lg'>
                Our company providerse range of services that aptly cater to all your specific needs.
              </p>
            </div>
            <div className='absolute left-0 top-0 h-[1px] w-[12px] bg-black'></div>
            <div className='absolute left-0 top-0 h-[12px] w-[2px] bg-black'></div>
            <div className='absolute bottom-0 right-0 h-[0.5px] w-[12px] bg-black'></div>
            <div className='absolute bottom-0 right-0 h-[12px] w-[1px] bg-black'></div>
          </div>
        </div>
        <div className='mt-16 py-2 sm:px-10 md:px-16 lg:px-8'>
          <div className='grid grid-cols-12 gap-x-4 gap-y-6 md:gap-6'>
            {services.map((service, index) => (
              <Fragment key={index}>
                <div className='relative col-span-6 lg:col-span-3'>
                  <div className='pt-8 text-center lg:text-left'>
                    <h4 className='mb-1 font-semibold tracking-wider text-blue sm:text-lg'>{service.serviceName}</h4>
                    <p className='leading-5'>{service.description}</p>
                  </div>
                  <div className='absolute left-[50%] top-0 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-0'></div>
                  <div className='absolute left-[46%] top-0 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-3'></div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
