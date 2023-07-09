import Carousel from 'react-multi-carousel'
import { banners, responsiveForBanner } from 'src/api/home.api'

export default function CarouselBanner() {
  return (
    <div className=''>
      <Carousel
        responsive={responsiveForBanner}
        pauseOnHover={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
        arrows={true}
        showDots={true}
      >
        {banners.map((image, index) => (
          <div key={index} className='h-[100vh] w-full overflow-hidden'>
            <img src={image} alt={image} className=' h-full w-full object-none md:object-cover' />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
