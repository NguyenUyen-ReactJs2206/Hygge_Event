/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { createPortal } from 'react-dom'

type Props = {
  showPopup: boolean
  onClose: () => void
  handleOverlayClick: (event: any) => void
}
export default function PopupForm({ showPopup, onClose, handleOverlayClick }: Props) {
  return createPortal(
    <div
      onClick={handleOverlayClick}
      className={` transition-all duration-300
       ${showPopup ? 'visible' : 'invisible translate-y-[-100%]'} 
      fixed inset-0 z-[99999] flex h-[100vh] w-full 
      items-center justify-center bg-slate-400/70 `}
    >
      <div className={`rounded-sm bg-white shadow-2xl`}>
        <div className='h-fit w-[250px] py-8 xs:w-[320px] sm:w-[350px] md:h-[350px] md:w-[550px]'>
          <div className='mb-4 flex w-full items-center justify-center '>
            <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full border-[4px] border-green-200 text-green-400 md:h-[80px] md:w-[80px] md:border-[5px] '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-10 w-10 md:h-14 md:w-14'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
              </svg>
            </div>
          </div>
          <div className='px-4'>
            <h2 className='py-2 text-center text-2xl font-semibold text-green-600 md:text-3xl'>
              Email sent successfully
            </h2>
            <h4 className='text-center text-xl font-medium md:text-2xl'>Thank you for choosing Hygge</h4>
            <p className='text-center md:text-xl'>We have received your email and will get back to you soon.</p>
          </div>
          <div className='mt-4 flex w-full items-center justify-center md:mt-6'>
            <button onClick={onClose} className='rounded-sm bg-green-600 px-4 py-2 text-white hover:shadow-md'>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
