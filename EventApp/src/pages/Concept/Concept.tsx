import NavHeader from '../../components/NavHeader'

export default function Concept() {
  return (
    <div>
      <nav className='fixed top-0 z-[999999999999] w-full border-b border-b-gray/10 bg-white shadow-sm'>
        <NavHeader />
      </nav>
      <div className='pb-16 pt-36 lg:pt-48'>
        <div className='md:container'>
          <div>
            <h1 className='font mb-4 pl-10 text-4xl font-semibold tracking-wider text-gray md:hidden'>Concepts</h1>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                {/* sssssssssssssss */}
                <div className='group relative cursor-pointer pl-0 md:pl-12 lg:pl-16'>
                  <div className='h-full w-full overflow-hidden'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept1'
                      className='h-[300px] w-full object-cover shadow-sm duration-1000 group-hover:scale-125 group-hover:opacity-50 group-hover:duration-1000 md:h-full md:duration-0 md:group-hover:scale-100 md:group-hover:opacity-100'
                    />
                  </div>
                  <div className='absolute inset-0 md:static md:block'>
                    <div className='pl-4 pt-4 md:pl-0 md:pt-0'>
                      <div
                        className='translate-y-12 transform opacity-0 transition-all 
                            duration-1000 group-hover:translate-y-0
                            group-hover:opacity-100 md:translate-y-0
                            md:transform-none md:opacity-100
                            md:transition-none md:duration-0'
                      >
                        <h3 className='text-3xl font-medium tracking-wider text-blue md:text-lg'>Rapunzel</h3>
                        <button>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ssssssssssssssssss */}
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='md:pl-24 md:pr-12 md:pt-10 lg:pl-40 lg:pr-16'>
                  <div className='h-full w-full'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept2'
                      className='h-[300px] w-full object-cover shadow-sm md:h-full'
                    />
                  </div>
                  <h3>Bridgerton</h3>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:my-16'>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                <div className='md:pl-12 md:pr-24 md:pt-10 lg:pl-16 lg:pr-40 '>
                  <div className='h-full w-full'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept2'
                      className='h-[300px] w-full object-cover shadow-sm md:h-full'
                    />
                  </div>
                  <h3>Beaty and the beast</h3>
                  <button>Read More</button>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='pr-0 md:pr-12 lg:pr-16'>
                  <div className='h-full w-full'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept1'
                      className='h-[300px] w-full object-cover shadow-sm md:h-full'
                    />
                  </div>
                  <h3>Elegant love</h3>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                <div className='pl-0 md:pl-12 lg:pl-16'>
                  <div className='h-full w-full'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept1'
                      className='h-[300px] w-full object-cover shadow-sm md:h-full'
                    />
                  </div>
                  <h3>The greatest showman</h3>
                  <button>Read More</button>
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='md:pl-24 md:pr-12 md:pt-10 lg:pl-40 lg:pr-16'>
                  <div className='h-full w-full'>
                    <img
                      src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                      alt='concept2'
                      className='h-[300px] w-full object-cover shadow-sm md:h-full'
                    />
                  </div>
                  <h3>Upside down</h3>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
