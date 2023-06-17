import CarouselReviews from '../../components/Carousels/CarouselTestimonials/CarouselReviews'
import CarouselCategoryPost from '../../components/Carousels/CarouselTestimonials/CarouselCategoryPost'
import NavHeader from '../../components/NavHeader'

export default function Testimonials() {
  return (
    <div>
      <nav className='fixed z-[999999] w-full border-b border-b-gray/10 bg-white shadow-sm'>
        <NavHeader />
      </nav>
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
