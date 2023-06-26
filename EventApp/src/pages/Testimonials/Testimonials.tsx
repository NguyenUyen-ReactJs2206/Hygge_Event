import CarouselCategoryPost from 'src/components/Carousels/CarouselTestimonials/CarouselCategoryPost'
import CarouselReviews from 'src/components/Carousels/CarouselTestimonials/CarouselReviews'

export default function Testimonials() {
  return (
    <div className='testimonials-page' id='top'>
      <div className=' pb-16 pt-24'>
        <div className='border-b border-b-gray/10 shadow-sm'>
          <div className='md:container'>
            <CarouselCategoryPost />
          </div>
        </div>
        <div className='md:container'>
          <CarouselReviews />
        </div>
      </div>
    </div>
  )
}
