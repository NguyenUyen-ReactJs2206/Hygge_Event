import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MoreConcept from 'src/components/MoreConcept'
import pathConceptDetails from 'src/constants/pathConceptDetails'

type Props = {
  name: string
  listConceptDetail: string[]
}
export default function ConceptDetail({ name, listConceptDetail }: Props) {
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
          {listConceptDetail.slice(0, 4).map((image, index) => (
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
          <h4 className='py-4 text-2xl font-medium tracking-wider text-gray'>More concept</h4>
          <div>
            <Slider {...settings}>
              <MoreConcept name='Rapunzel' pathConcept={pathConceptDetails.conceptRapunzel} />
              <MoreConcept name='Bridgerton' pathConcept={pathConceptDetails.conceptBridgerton} />
              <MoreConcept name='Beaty And The Beast' pathConcept={pathConceptDetails.conceptBeatyAndTheBeast} />
              <MoreConcept name='Elegant Love' pathConcept={pathConceptDetails.conceptElegantLove} />
              <MoreConcept name='The Greatest Showman' pathConcept={pathConceptDetails.conceptTheGreatestShowman} />
              <MoreConcept name='Upside Down' pathConcept={pathConceptDetails.conceptUpsideDown} />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
