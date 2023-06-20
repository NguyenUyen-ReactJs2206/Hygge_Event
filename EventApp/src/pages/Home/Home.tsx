import { Fragment } from 'react'
import { services } from '../../api/services.api'
import NavHeader from '../../components/NavHeader'
import conceptOne from '../../assets/images/conceptOne.png'
import conceptTwo from '../../assets/images/conceptTwo.png'
import { features } from '../../api/featured.api'
import NumberUp from '../../components/NumberUp'
import backgroundBlack from '../../assets/images/backgroundBlack.png'
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
      <div className='services py-32'>
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
                <article className='relative col-span-6 lg:col-span-3'>
                  <div className='pt-8 text-center lg:text-left'>
                    <h4 className='mb-1 font-semibold tracking-wider text-blue sm:text-lg'>{service.serviceName}</h4>
                    <p className='leading-5'>{service.description}</p>
                  </div>
                  <div className='absolute left-[50%] top-0 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-0'></div>
                  <div className='absolute left-[46%] top-0 h-5 w-5 rounded-full border-2 border-blue bg-transparent sm:h-6 sm:w-6 lg:left-3'></div>
                </article>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='strengths'>
        <div className='group relative grid grid-cols-2'>
          <div className='absolute col-span-2 h-full w-full lg:static lg:col-span-1'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:px-20 lg:py-32 '>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold'>
                  Our Strengths
                </h3>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium'>
                    <div className='uppercase tracking-wide'>Planning</div>
                    <div>66%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[66%] bg-blue'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[34%] bg-gray/10'></div>
                  </div>
                </div>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium'>
                    <div className='uppercase tracking-wide'>Concept</div>
                    <div>72%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[72%] bg-blue'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[28%] bg-gray/10'></div>
                  </div>
                </div>

                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium'>
                    <div className='uppercase tracking-wide'>Design</div>
                    <div>78%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[78%] bg-blue'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[22%] bg-gray/10'></div>
                  </div>
                </div>
                <div className=''>
                  <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium'>
                    <div className='uppercase tracking-wide'>Production</div>
                    <div>90%</div>
                    <div className='absolute bottom-0 left-0 h-1 w-[90%] bg-blue'></div>
                    <div className='absolute bottom-0 right-0 h-1 w-[10%] bg-gray/10'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-span-2 lg:col-span-1'>
            <div className='h-full w-full overflow-hidden'>
              <img
                src={conceptOne}
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
                src={conceptTwo}
                alt='conceptOne'
                className='h-full w-full duration-[2000ms] group-hover:scale-110 group-hover:opacity-30 group-hover:duration-[2000ms] lg:group-hover:opacity-100'
              />
            </div>
          </div>
          <div className='absolute col-span-2 h-full w-full lg:static lg:col-span-1'>
            <div className='h-full w-full items-center p-4 sm:px-10 sm:py-20 lg:px-20 lg:pt-36 xl:pt-52 '>
              <div
                className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 lg:translate-y-0
            lg:transform-none lg:opacity-100
            lg:transition-none lg:duration-0'
              >
                <h3 className='text-xl font-extrabold uppercase tracking-wider text-blue sm:text-2xl sm:font-semibold'>
                  From warmth to endless amore
                </h3>
                <p className='mt-4 text-sm sm:text-base'>
                  We are dedicated to creating unforgettable and everlasting memories for couples, turning their dreams
                  into reality with impeccable planning and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featured py-20 sm:pb-20 sm:pt-32'>
        <div className='flex items-center justify-center'>
          <div className='relative max-w-[680px] px-12 py-6'>
            <div className='text-center'>
              <h3 className='mb-4 text-2xl font-semibold uppercase tracking-wider text-blue md:text-4xl'>
                Featured Projects
              </h3>
              <p className='text-base md:text-lg'>
                These exemplary reflect out unwavering commilment and fervor tawards our croft.
              </p>
            </div>
            <div className='absolute left-0 top-0 h-[1px] w-[12px] bg-black'></div>
            <div className='absolute left-0 top-0 h-[12px] w-[2px] bg-black'></div>
            <div className='absolute bottom-0 right-0 h-[0.5px] w-[12px] bg-black'></div>
            <div className='absolute bottom-0 right-0 h-[12px] w-[1px] bg-black'></div>
          </div>
        </div>
        <div className='mt-20 text-center md:px-20'>
          <div className='grid grid-cols-6 md:gap-6'>
            {features.map((feature, index) => (
              <Fragment key={index}>
                <div className='col-span-3 md:col-span-2'>
                  <img src={feature} alt={feature} />
                </div>
              </Fragment>
            ))}
          </div>
          <button className='mt-10 rounded-3xl border-2 border-gray/50 px-6 py-2 font-medium uppercase duration-300 hover:border-blue hover:bg-blue hover:text-white hover:transition-all hover:duration-300 sm:px-10 sm:py-3'>
            Read more
          </button>
        </div>
      </div>
      <div className='my-10 '>
        <div className='grid grid-cols-4 gap-y-8'>
          <div className='col-span-2 sm:col-span-1'>
            <div className=' text-center'>
              <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                <NumberUp number={30} />
              </div>
              <div className='border-t-2 border-gray/5  text-[14px] font-semibold tracking-wider'>Projects</div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <div className='text-center'>
              <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                <NumberUp number={22} />
              </div>
              <div className='border-t-2 border-gray/5  text-[14px] font-semibold tracking-wider'>Team Members</div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <div className=' text-center'>
              <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                <NumberUp number={25} />
              </div>
              <div className='border-t-2 border-gray/5  text-[14px] font-semibold tracking-wider'>Clients</div>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1'>
            <div className=' text-center'>
              <div className='mb-[-7px] text-5xl font-medium tracking-wider text-blue'>
                <NumberUp number={5} />
              </div>
              <div className='border-t-2 border-gray/5  text-[14px] font-semibold tracking-wider'>Awards won</div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-32 sm:my-40'>
        <div className='hidden md:block'>
          <div className='relative h-full w-full pb-40 pt-14 lg:pb-48 lg:pt-16'>
            <img src={backgroundBlack} alt='background' className='h-[70px] w-full' />
            <div className='absolute bottom-0 top-0 grid grid-cols-3 md:left-4 md:right-4 md:gap-3 lg:left-10 lg:right-10 lg:gap-12'>
              <div className='col-span-1'>
                <div className='h-full w-full border-t border-t-gray/5 bg-white shadow-md'>
                  <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12'>
                    <div className='relative h-20 w-20 border-2 border-gray/60'>
                      <div className='absolute left-0 top-0 h-[25px] w-[50px] border-b-2 border-r-2 border-gray/60'></div>
                      <div className='absolute right-0 top-0 h-[25px] w-[30px] border-b-2 border-gray/60'></div>
                    </div>
                  </div>
                  <div className='text-center md:px-2 lg:px-8'>
                    <h3 className='mb-3 font-semibold uppercase tracking-wider text-blue md:text-xl lg:text-2xl'>
                      UniQue Design
                    </h3>
                    <p className=''>Stay abreast of the latest trends and set the syandard with our designs.</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='h-full w-full border-t border-t-gray/5 bg-white shadow-md'>
                  <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12'>
                    <div className='relative h-20 w-20 border-2 border-gray/60'>
                      <div className='absolute right-0 top-0 h-[25px] w-[30px] border-b-2 border-l-2 border-gray/60'></div>
                      <div className='absolute bottom-0 right-0 h-[55px] w-[30px] border-l-2 border-gray/60'></div>
                    </div>
                  </div>
                  <div className='text-center md:px-2 lg:px-8'>
                    <h3 className='mb-3 font-semibold uppercase tracking-wider text-blue md:text-xl lg:text-2xl'>
                      Credibility
                    </h3>
                    <p className=''>We are dedicated to providing our customers with unwavering commitment.</p>
                  </div>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='h-full w-full border-t border-t-gray/5 bg-white shadow-md'>
                  <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12'>
                    <div className='relative h-20 w-20 border-2 border-gray/60'>
                      <div className='absolute left-0 top-0 h-[50px] w-[50px] border-b-2 border-r-2 border-gray/60'></div>
                      <div className='absolute right-0 top-0 h-[50px] w-[30px] border-b-2 border-gray/60'></div>
                    </div>
                  </div>
                  <div className='text-center md:px-2 lg:px-8'>
                    <h3 className='mb-3 font-semibold uppercase tracking-wider text-blue md:text-xl lg:text-2xl'>
                      Reasonable price
                    </h3>
                    <p className=''>The pricing of our service is competitive and offers excellent value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
