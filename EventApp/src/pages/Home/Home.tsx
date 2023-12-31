import { Fragment } from 'react'
import strengthOne from 'src/assets/images/home/strengths/strengthOne.png'
import strengthTwo from 'src/assets/images/home/strengths/strengthTwo.png'
import NumberUp from 'src/pages/Home/components/NumberUp'
import backgroundBlack from 'src/assets/images/background/backgroundBlack.png'
import backgroundSlide from 'src/assets/images/background/backgroundSlide.png'
import CarouselCategoryPost from 'src/components/Carousels/CarouselTestimonials/CarouselCategoryPost'
import CarouselBanner from 'src/pages/Home/components/CarouselBanner'
import { features, services } from 'src/api/home.api'
import HorizontalLineEffect from 'src/components/HorizontalLineEffect'
import CarouselComponent from './components/CarouselComponent/CarouselComponent'
import CarouselMembers from './components/CarouselMembers'
import CarouselLatestArticles from './components/CarouselLatestArticles'

export default function Home() {
  return (
    <div className='home-page' id='top'>
      <div className='banner relative'>
        <CarouselBanner />
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
      <div className='services py-32'>
        <div className='flex items-center justify-center'>
          <div className='container'>
            <div className='group relative max-w-[680px] px-12 py-6'>
              <div className='text-center'>
                <h3 className='mb-4 text-2xl font-semibold uppercase tracking-wider text-blue md:text-4xl'>
                  What Hygge is about
                </h3>
                <p className='text-base tracking-wider md:text-lg'>
                  Our company providerse range of services that aptly cater to all your specific needs.
                </p>
              </div>
              <HorizontalLineEffect />
            </div>
          </div>
        </div>
        <div className='mt-16 p-2 sm:px-10 md:px-16 lg:px-8'>
          <div className='mx-auto max-w-[1700px]'>
            <div className='grid grid-cols-12 gap-x-4 gap-y-6 md:gap-6'>
              {services.map((service, index) => (
                <Fragment key={index}>
                  <article className='col-span-6 cursor-default transition-all duration-500 hover:shadow-xl hover:duration-500 lg:col-span-3'>
                    <div className='relative p-2'>
                      <div className='pt-8 text-center lg:text-left'>
                        <h4 className='mb-1 font-semibold tracking-wider text-blue sm:text-lg'>
                          {service.serviceName}
                        </h4>
                        <p className='leading-5'>{service.description}</p>
                      </div>
                      <div className='absolute left-[50%] top-2 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-2'></div>
                      <div className='absolute left-[46%] top-2 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-5'></div>
                    </div>
                  </article>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='strengths'>
        <div className='group relative grid grid-cols-2'>
          <div className='absolute col-span-2 h-full w-full lg:static lg:col-span-1'>
            <div className='lg:group-hover:duration-7000 h-full w-full items-center p-4 transition-all duration-700 sm:px-10 sm:py-20 lg:px-20 lg:py-32 lg:group-hover:bg-blue'>
              <div
                className='translate-y-12 transform opacity-0 transition-all duration-1000 
            group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold lg:group-hover:text-white'>
                  Our Strengths
                </h3>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium lg:group-hover:text-white'>
                    <div className='uppercase tracking-wide'>Planning</div>
                    <div>66%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[66%] bg-blue lg:group-hover:bg-white'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[34%] bg-gray/10 lg:group-hover:bg-gray/80'></div>
                  </div>
                </div>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium lg:group-hover:text-white'>
                    <div className='uppercase tracking-wide'>Concept</div>
                    <div>72%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[72%] bg-blue lg:group-hover:bg-white'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[28%] bg-gray/10 lg:group-hover:bg-gray/80'></div>
                  </div>
                </div>

                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium lg:group-hover:text-white'>
                    <div className='uppercase tracking-wide'>Design</div>
                    <div>78%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[78%] bg-blue lg:group-hover:bg-white'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[22%] bg-gray/10 lg:group-hover:bg-gray/80'></div>
                  </div>
                </div>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium lg:group-hover:text-white'>
                    <div className='uppercase tracking-wide'>Production</div>
                    <div>90%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[90%] bg-blue lg:group-hover:bg-white'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[10%] bg-gray/10 lg:group-hover:bg-gray/80'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-span-2 lg:col-span-1'>
            <div className='h-full w-full overflow-hidden'>
              <img
                src={strengthOne}
                alt='conceptOne'
                className='h-full w-full duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:opacity-100 lg:group-hover:opacity-100'
              />
            </div>
          </div>
        </div>
        <div className='group relative grid grid-cols-2'>
          <div className=' col-span-2 lg:col-span-1'>
            <div className='h-full w-full overflow-hidden'>
              <img
                src={strengthTwo}
                alt='conceptOne'
                className='h-full w-full duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:group-hover:opacity-100'
              />
            </div>
          </div>
          <div className='absolute col-span-2 h-full w-full lg:static lg:col-span-1'>
            <div className='lg:group-hover:duration-7000 duration-7000 h-full w-full items-center p-4 transition-all sm:px-10 sm:py-20 lg:px-20 lg:pt-36 lg:group-hover:bg-blue xl:pt-52'>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold lg:group-hover:text-white'>
                  From warmth to endless amore
                </h3>
                <p className='mt-4 text-base tracking-wider sm:text-lg lg:group-hover:text-white'>
                  We are dedicated to creating unforgettable and everlasting memories for couples, turning their dreams
                  into reality with impeccable planning and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featured'>
        <div className='flex items-center justify-center py-28 lg:py-32'>
          <div className='container'>
            <div className='group relative max-w-[680px] px-12 py-6'>
              <div className='text-center'>
                <h3 className='mb-4 text-2xl font-semibold uppercase tracking-wider text-blue md:text-4xl'>
                  Featured Projects
                </h3>
                <p className='text-base tracking-wider md:text-lg'>
                  These exemplary reflect out unwavering commilment and fervor tawards our croft.
                </p>
              </div>
              <HorizontalLineEffect />
            </div>
          </div>
        </div>
        <div className='text-center'>
          <div className='container'>
            <div className='grid grid-cols-6 md:gap-6'>
              {features.map((feature, index) => (
                <Fragment key={index}>
                  <div className='col-span-3 md:col-span-2'>
                    <img src={feature} alt={feature} />
                  </div>
                </Fragment>
              ))}
            </div>
            <button className='mt-10 rounded-3xl border-2 border-gray/50 px-6 py-2 font-medium uppercase tracking-wider duration-300 hover:border-blue hover:bg-blue hover:text-white hover:transition-all hover:duration-300 sm:px-10 sm:py-3'>
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className='number-up pt-32'>
        <div className='sm:container'>
          <div className='grid grid-cols-4 gap-y-8'>
            <div className='col-span-2 sm:col-span-1'>
              <div className=' text-center'>
                <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                  <NumberUp number={30} />
                </div>
                <div className='block border-t border-t-gray/10 text-[14px] font-semibold tracking-wider sm:hidden'>
                  Projects
                </div>
              </div>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <div className='text-center'>
                <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                  <NumberUp number={22} />
                </div>
                <div className='block border-t border-t-gray/10 text-[14px] font-semibold tracking-wider sm:hidden'>
                  Team Members
                </div>
              </div>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <div className=' text-center'>
                <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                  <NumberUp number={25} />
                </div>
                <div className='block border-t border-t-gray/10 text-[14px] font-semibold tracking-wider sm:hidden'>
                  Clients
                </div>
              </div>
            </div>
            <div className='col-span-2 sm:col-span-1'>
              <div className=' text-center'>
                <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                  <NumberUp number={5} />
                </div>
                <div className='block border-t border-t-gray/10 text-[14px] font-semibold tracking-wider sm:hidden'>
                  Awards won
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='hidden text-gray/10 sm:block' />
        <div className='sm:container'>
          <div className='mx-auto hidden max-w-[1800px] sm:block'>
            <div className='grid grid-cols-4 gap-y-8'>
              <div className='col-span-1'>
                <div className=' text-center'>
                  <div className='text-[14px] font-semibold tracking-wider'>Projects</div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='text-center'>
                  <div className='text-[14px] font-semibold tracking-wider'>Team Members</div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className=' text-center'>
                  <div className='text-[14px] font-semibold tracking-wider'>Clients</div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className=' text-center'>
                  <div className='text-[14px] font-semibold tracking-wider'>Awards won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='corporation-identify-program mb:16 mt-32 sm:mt-40'>
        <div className=' h-full w-full pb-40 pt-14 lg:pb-48 lg:pt-16'>
          <img src={backgroundBlack} alt='background' className='h-full w-full' />
          <div className='container bottom-0 top-0 mx-auto'>
            <div className='mt-[-100px] h-full w-full'>
              <CarouselComponent />
            </div>
          </div>
        </div>
      </div>
      <div className='slide mb-20'>
        <div className='relative h-full w-full pb-52 md:pb-48'>
          <img src={backgroundSlide} alt='background' className='h-[200px] w-full object-top' />
          <div className='container absolute bottom-0 left-2 right-2 top-16 mx-auto h-full bg-white shadow-md xs:left-5 xs:right-5 lg:inset-x-6 xl:inset-x-14'>
            <CarouselCategoryPost />
          </div>
        </div>
      </div>
      <div className='create-team'>
        <div className='container'>
          <div className='flex items-center justify-center py-28 lg:py-32'>
            <div className='group relative max-w-[680px] px-12 py-6'>
              <div className='text-center'>
                <h3 className='mb-4 text-2xl font-semibold uppercase tracking-wider text-blue md:text-4xl'>
                  Creative Team
                </h3>
                <p className='text-base tracking-wider md:text-lg'>
                  We become your confidants, effecttive partners, and diligent assistants throughout your journey.
                </p>
              </div>
              <HorizontalLineEffect />
            </div>
          </div>
          <div className='mb-10'>
            <CarouselMembers />
          </div>
        </div>
      </div>
      <div className='latest-articles my-32'>
        <div className='mx-auto max-w-[1400px] px-4 sm:px-2'>
          <h3 className='mb-10 text-center text-3xl font-semibold uppercase tracking-widest text-blue md:mb-20 md:text-5xl'>
            Latest Articles
          </h3>
          <CarouselLatestArticles />
        </div>
      </div>
    </div>
  )
}
