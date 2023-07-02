import { useState, useEffect } from 'react'
import { slidesReview } from 'src/api/home.api'

export default function CarouselReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoSlide = true
  const autoSlideInterval = 1000

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? slidesReview.length - 1 : curr - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slidesReview.length - 1 ? 0 : curr + 1))
  }
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])

  return (
    <>
      <div className='group relative m-auto h-[50vh] w-full max-w-[1400px] px-0 py-8 md:px-4 md:py-16'>
        <div className='flex h-full w-full items-center px-10 text-center transition-all duration-1000 ease-out md:px-32'>
          <div>
            <h2 className='my-4 text-lg font-semibold uppercase tracking-wider text-blue md:text-3xl '>
              {slidesReview[currentIndex].testimonial}
            </h2>
            <div className='tracking-wider'>{slidesReview[currentIndex].description}</div>
            <h4 className='mt-4 text-sm font-semibold uppercase tracking-wider'> {slidesReview[currentIndex].name}</h4>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className='absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer p-2 text-2xl text-black/30 hover:text-black/60 md:left-14'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-8 w-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </button>
        <button
          onClick={prevSlide}
          className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer p-2 text-2xl text-black/30 hover:text-black/60 md:right-14'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-8 w-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
    </>
  )
}
