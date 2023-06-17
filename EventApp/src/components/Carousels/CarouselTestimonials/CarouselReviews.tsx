import { useState, useEffect } from 'react'

const slides = [
  {
    testimonial: 'Bridegerton Concept',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Hoang Nhu - Out valued bride'
  },
  {
    testimonial: 'Rapunzel Concept',
    description:
      'Lorem ipsum dolor elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Hai Hoai - Out valued bride'
  },
  {
    testimonial: 'Beaty Concept',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Hoang Ha - Out valued bride'
  },
  {
    testimonial: 'Elegant Concept',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! psam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Huy Hoang - Out valued bride'
  }
]

export default function CarouselCategoryPost() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoSlide = true
  const autoSlideInterval = 5000

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
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
            <h2 className='my-4 text-lg font-[550] uppercase text-blue md:text-3xl '>
              {slides[currentIndex].testimonial}
            </h2>
            <div>{slides[currentIndex].description}</div>
            <h4 className='mt-4 text-sm uppercase'> {slides[currentIndex].name}</h4>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className='absolute left-0 top-[50%] translate-y-[-50%] cursor-pointer p-2 text-2xl text-black/30 hover:text-black/60 md:left-5'
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
          className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer p-2 text-2xl text-black/30 hover:text-black/60 md:right-5'
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
