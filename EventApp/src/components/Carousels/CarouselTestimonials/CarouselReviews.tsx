import { useState } from 'react'
import postOne from '../../../assets/images/Testimonials/postOne.png'

const slides = [`${postOne}`, `${postOne}`, `${postOne}`, `${postOne}`]
export default function CarouselReviews() {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <>
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-700 ease-out'
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((element, index) => (
            <img src={element} key={index} alt='' />
          ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button onClick={prev} className='text-gray-800 rounded-full bg-white/80 p-1 shadow hover:bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </button>
          <button onClick={next} className='text-gray-800 rounded-full bg-white/60 p-1 shadow hover:bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
