import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  name: string
  listConcept: string[]
}
export default function ConceptDetail({ name, listConcept }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }
  return (
    <div className='concept-detail py-24' id='top'>
      <div className='container'>
        <h1 className='mb-4 p-4 text-3xl font-semibold tracking-wider text-gray md:p-10'>{name}</h1>
        <div className='grid gap-y-1'>
          {listConcept.slice(0, 4).map((image, index) => (
            <div key={index} className='mx-auto h-full max-w-[1000px] cursor-pointer overflow-hidden'>
              <img src={image} alt={image} className='h-full w-[1000px] object-cover' />
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button className='my-10 flex-shrink-0 rounded-sm border border-gray/50 px-6 py-2 text-center text-lg uppercase tracking-widest text-gray/50 hover:border-gray/70 hover:text-gray/70'>
            View full album
          </button>
        </div>
        <hr className='mx-auto max-w-[1000px] text-gray/10' />
        <div className='mx-auto my-10 max-w-[1000px]'>
          <div>
            <Slider {...settings}>
              {listConcept.map((image, index) => (
                <div
                  key={index}
                  className='mx-auto h-[200px] w-full cursor-pointer overflow-hidden px-1 sm:h-[300px] md:h-[400px]'
                >
                  <img src={image} alt={image} className='h-full w-full object-cover' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
