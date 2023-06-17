import { useState, useEffect } from 'react'

const slides = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Quynh Dang - CEO'
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Hai Hoai - CEO'
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Hoang Ha - CEO'
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
    name: 'Huy Hoang - CEO'
  }
]
export default function CarouselCategoryPost() {
  const autoSlide = true
  const autoSlideInterval = 3000

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex((curr) => (curr === slideIndex ? slides.length - (slides.length - slideIndex) + 1 : slideIndex))
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
            <div className='mb-4 flex justify-center'>
              <svg xmlns='http://www.w3.org/2000/svg' height='3em' viewBox='0 0 448 512'>
                <path d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z' />
              </svg>
            </div>
            <div>{slides[currentIndex].description}</div>
            <h4 className='mt-4 text-sm uppercase'> {slides[currentIndex].name}</h4>
          </div>
        </div>

        <div className='flex items-center justify-center gap-1'>
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              className={`
          h-1 w-3 bg-gray transition-all
          ${currentIndex === slideIndex ? 'w-5' : 'bg-opacity-30'}`}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
