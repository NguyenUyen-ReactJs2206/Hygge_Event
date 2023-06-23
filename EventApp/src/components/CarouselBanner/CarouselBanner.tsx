import { useEffect, useState } from 'react'
import { banners } from '../../api/banner.api'

export default function CarouselBanner() {
  const autoSlide = true
  const autoSlideInterval = 5000

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === banners.length - 1 ? 0 : curr + 1))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex((curr) => (curr === slideIndex ? banners.length - (banners.length - slideIndex) : slideIndex))
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])
  return (
    <div className=''>
      <div className='group h-full w-full'>
        <div className='relative flex h-full w-full justify-center text-center transition-all duration-1000 ease-out'>
          <div className='h-[70vh]  w-full overflow-hidden sm:h-[75vh] md:h-[85vh] xl:h-[100vh]'>
            <img
              src={banners[currentIndex]}
              alt={banners[currentIndex]}
              className='h-full w-full object-none md:object-cover'
            />
          </div>
          <div className='absolute bottom-0 left-0 right-0 flex h-20 items-center justify-end gap-2 md:justify-center'>
            {banners.map((_, index) => (
              <button
                key={index}
                className={`
          z-10 h-3 w-3 rounded-full bg-white transition-all md:h-4 md:w-4
          ${currentIndex === index ? '' : 'bg-opacity-30'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}