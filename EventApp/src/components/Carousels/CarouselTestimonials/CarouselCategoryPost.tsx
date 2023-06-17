import { useState, useEffect } from 'react'
import postOne from '../../../assets/images/Testimonials/postOne.png'

const slides = [`${postOne}`, `${postOne}`, `${postOne}`, `${postOne}`]

export default function CarouselCategoryPost() {
  const autoSlide = true
  const autoSlideInterval = 3000
  const [curr, setCurr] = useState(0)

  // const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  const handleClick = (index: number) => {
    setCurr((curr) => (curr === index ? slides.length - (slides.length - index) + 1 : index))
  }
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])
  return (
    <>
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-700 ease-out'
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((element, index) => (
            <img src={element} alt='' key={index} className='z-[-999999]' />
          ))}
        </div>
        <div className='absolute bottom-10 left-0 right-0 sm:bottom-14 md:bottom-20 lg:bottom-28'>
          <div className='flex items-center justify-center gap-1'>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`
          h-1 w-3 bg-gray transition-all
          ${curr === index ? 'w-5' : 'bg-opacity-30'}`}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
