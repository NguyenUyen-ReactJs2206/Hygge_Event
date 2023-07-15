export default function Contact() {
  return (
    <div className='contact-page py-32' id='top'>
      <div className='container mx-auto sm:max-w-[500px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1200px] twoXl:max-w-[1300px]'>
        <div className='grid-cols-12 md:grid'>
          <div className='col-span-12 flex items-center justify-center lg:col-span-4'>
            <div className='mx-4'>
              <div className='grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                  <div className='flex border-b border-b-blue py-8'>
                    <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                      aa
                    </div>
                    <div className='ml-4 break-normal'>
                      <h5 className='text-xl font-semibold'>Office Address</h5>
                      <p className='mt-2 text-lg'>
                        165/43 Nguyen Thai Binh, Nguyen Thai Binh Ward, District 1, Ho Chi Minh City, Vietnam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                  <div className='flex border-b border-b-blue py-8'>
                    <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                      aa
                    </div>
                    <div className='ml-4 break-normal'>
                      <h5 className='text-xl font-semibold'>Working Hours</h5>
                      <p className='mt-2 text-lg'>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                  <div className='flex  py-8'>
                    <div className='flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white'>
                      aa
                    </div>
                    <div className='ml-4 break-normal'>
                      <h5 className='text-xl font-semibold'>Message Us</h5>
                      <p className='mt-2 text-lg'>info.artofhygge@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-span-12 lg:col-span-8'>
            <form className='bg-blue/20 px-4 py-20 text-center sm:px-6 md:px-10 lg:px-16 xl:px-20'>
              <h2 className='mb-8 py-4 text-5xl font-extrabold text-blue'>Get In Touch</h2>
              <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                <div className='col-span-2 md:col-span-1'>
                  <input
                    placeholder='Your Name'
                    type='text'
                    className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
                  />
                </div>
                <div className='col-span-2 md:col-span-1'>
                  <input
                    placeholder='Email'
                    type='email'
                    className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
                  />
                </div>
                <div className='col-span-2 md:col-span-1'>
                  <input
                    placeholder='Phone Number'
                    type='text'
                    className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
                  />
                </div>
                <div className='col-span-2 md:col-span-1'>
                  <input
                    placeholder='Subject'
                    type='text'
                    className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
                  />
                </div>
                <div className='col-span-2'>
                  <textarea
                    placeholder='Write Comments'
                    className='w-full border border-blue/80 px-4 py-6 text-lg outline-none focus:outline-blue'
                    rows={4}
                  ></textarea>
                </div>
                <div className='col-span-2'>
                  <button className='mt-6 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none hover:bg-blue'>
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
