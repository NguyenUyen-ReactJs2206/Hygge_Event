import { useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  listGalleryDetail: string[]

  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function PopUpSlideImages({ setIsPopupVisible, listGalleryDetail }: Props) {
  const [imageIndex, setImageIndex] = useState(0)
  const handleClosePopup = () => setIsPopupVisible(false)

  return createPortal(
    <div className='fixed inset-0 z-[99999] h-[100vh] w-full bg-black'>
      <div className='relative'>
        <div className='mx-auto h-[100vh] max-w-[1300px] overflow-hidden'>
          <img src={listGalleryDetail[0]} alt='#' className='h-full w-full object-cover' />
        </div>
        <div className='absolute left-0 right-0 top-0 h-[7vh] w-full bg-black/20'>
          <div className='flex items-center justify-between p-4'>
            <div className='text-white/80 hover:text-white'>1/10</div>
            <div className='flex gap-8 '>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                  />
                </svg>
              </button>
              <button onClick={handleClosePopup}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-[100px] w-full bg-[#0d0a0a]'>
          <div className='mt-2 h-[84px]'>
            <div className='flex gap-1 overflow-hidden'>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500 '>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
              <div className='h-[84px] w-[120px] overflow-hidden rounded-md border-2 border-white transition-all duration-500 hover:border-red-500 hover:duration-500'>
                <img src={listGalleryDetail[imageIndex]} alt='' className='h-full w-full object-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
