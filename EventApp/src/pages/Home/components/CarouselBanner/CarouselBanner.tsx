import Carousel from 'react-multi-carousel'
import { banners } from 'src/api/home.api'

export default function CarouselBanner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  return (
    <div className=''>
      <Carousel
        responsive={responsive}
        pauseOnHover={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        showDots={true}
        transitionDuration={2000}
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
