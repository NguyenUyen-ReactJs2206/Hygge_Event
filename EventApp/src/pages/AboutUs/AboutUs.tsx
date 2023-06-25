import { aboutUsApi } from 'src/api/aboutUs.api'

export default function AboutU2() {
  return (
    <div className='about-us'>
      <div className='pt-20 lg:pt-[70px]'>
        <h1 className='font mb-4 pl-10 pt-6 text-4xl font-semibold tracking-wider text-gray md:hidden'>About Us</h1>
        <div className='group relative grid grid-cols-12'>
          <div className=' col-span-12 lg:col-span-7 xl:col-span-8'>
            <div className='h-[300px] w-full overflow-hidden xs:h-[400px] sm:h-full'>
              <img
                src={aboutUsApi[0].image}
                alt='conceptOne'
                className='h-full w-full object-cover duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:opacity-100 lg:group-hover:opacity-100'
              />
            </div>
          </div>
          <div className='absolute col-span-12 h-full w-full lg:static lg:col-span-5 lg:bg-blue xl:col-span-4'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:px-20 lg:pt-32 '>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold lg:text-white'>
                  {aboutUsApi[0].title}
                </h3>
                <p className='mt-4 text-justify text-[12px] tracking-wide xs:text-[14px] sm:text-base lg:text-white'>
                  {aboutUsApi[0].content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative grid grid-cols-12'>
          <div className='absolute col-span-12 h-full w-full lg:static lg:col-span-5 xl:col-span-4'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:px-20 lg:pt-32'>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold'>
                  {aboutUsApi[1].title}
                </h3>
                <p className='mt-4 text-justify text-[12px] tracking-wide xs:text-[14px] sm:text-base'>
                  {aboutUsApi[1].content}
                </p>
              </div>
            </div>
          </div>
          <div className=' col-span-12 lg:col-span-7 xl:col-span-8'>
            <div className='h-[300px] w-full overflow-hidden xs:h-[400px] sm:h-full'>
              <img
                src={aboutUsApi[1].image}
                alt='conceptOne'
                className='h-full w-full object-cover duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:group-hover:opacity-100'
              />
            </div>
          </div>
        </div>
        <div className='group relative grid grid-cols-12'>
          <div className=' col-span-12 lg:col-span-7 xl:col-span-8'>
            <div className='h-[300px] w-full overflow-hidden xs:h-[400px] sm:h-full'>
              <img
                src={aboutUsApi[2].image}
                alt='conceptOne'
                className='h-full w-full object-cover duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:opacity-100 lg:group-hover:opacity-100'
              />
            </div>
          </div>
          <div className='absolute col-span-12 h-full w-full lg:static lg:col-span-5 xl:col-span-4'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:bg-blue lg:px-20 lg:pt-32 '>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold lg:text-white'>
                  {aboutUsApi[2].title}
                </h3>
                <p className='mt-4 text-justify text-[12px] tracking-wide xs:text-[14px] sm:text-base lg:text-white'>
                  {aboutUsApi[2].content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='group relative grid grid-cols-12'>
          <div className='absolute col-span-12 h-full w-full lg:static lg:col-span-5 xl:col-span-4'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:px-20 lg:pt-32 '>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold'>
                  {aboutUsApi[3].title}
                </h3>
                <p className='mt-4 text-justify text-[12px] tracking-wide xs:text-[14px] sm:text-base'>
                  {aboutUsApi[3].contentOne}
                  <br />
                  {aboutUsApi[3].contentTwo}
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-7 xl:col-span-8'>
            <div className='h-[300px] w-full overflow-hidden xs:h-[400px] sm:h-full'>
              <img
                src={aboutUsApi[3].image}
                alt='conceptOne'
                className='h-full w-full object-cover duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:group-hover:opacity-100'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
