import MoreConcept from 'src/components/MoreConcept'
import pathConceptDetails from 'src/constants/pathConceptDetails'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { responsive } from 'src/api/conceptDetails.api'
import { useContext, useState } from 'react'
import PopUpSlideImages from 'src/components/PopUpSlideImages'
import 'src/sass/index.scss'
import { useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'

type Props = {
  name: string
  listConceptDetail: string[]
}
export default function ConceptDetail({ name, listConceptDetail }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const { setLoading } = useContext(AppContext)
  const navigate = useNavigate()

  const [currentIndexImages, setCurrentIndexImages] = useState(0)
  const handleShowPopup = (index: number) => {
    setIsPopupVisible(true)
    setCurrentIndexImages(index)
  }

  const handleBack = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    navigate(`${path.concept}`)
  }

  return (
    <>
      <div className='concept-detail py-24' id='top'>
        <div className='mx-auto max-w-[1450px]'>
          <button
            onClick={handleBack}
            className='ml-1 flex border border-slate-200 px-2 py-1 text-sm text-slate-300 hover:border-slate-400 hover:text-slate-400'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
            </svg>

            <span>Concept</span>
          </button>
        </div>

        <div className='container'>
          <h1 className='mb-4 p-4 text-3xl font-semibold tracking-wider text-gray md:p-10'>{name}</h1>
          <div className='grid gap-y-1'>
            {listConceptDetail.slice(0, 4).map((image, index) => (
              <button
                onClick={() => handleShowPopup(index)}
                key={index}
                className='mx-auto h-full max-w-[1000px] cursor-pointer overflow-hidden'
              >
                <img src={image} alt={image} className='h-full w-[1000px] object-cover' />
              </button>
            ))}
          </div>
          <div className='text-center'>
            <button
              onClick={() => handleShowPopup(0)}
              className='my-10 flex-shrink-0 rounded-sm border border-gray/50 px-6 py-2 text-center text-lg uppercase tracking-widest text-gray/50 hover:border-gray/70 hover:text-gray/70'
            >
              View full album
            </button>
          </div>
          <hr className='mx-auto max-w-[1000px] text-gray/10' />
          <div className='mx-auto my-10 max-w-[1000px]'>
            <h4 className='py-4 text-2xl font-medium tracking-wider text-gray'>More concept</h4>
            <div className=''>
              <Carousel
                responsive={responsive}
                pauseOnHover={false}
                sliderClass='transition-duration-2000'
                infinite={true}
                arrows={true}
              >
                <MoreConcept name='Rapunzel' pathConcept={pathConceptDetails.conceptRapunzel} />
                <MoreConcept name='Bridgerton' pathConcept={pathConceptDetails.conceptBridgerton} />
                <MoreConcept name='Beaty And The Beast' pathConcept={pathConceptDetails.conceptBeatyAndTheBeast} />
                <MoreConcept name='Elegant Love' pathConcept={pathConceptDetails.conceptElegantLove} />
                <MoreConcept name='The Greatest Showman' pathConcept={pathConceptDetails.conceptTheGreatestShowman} />
                <MoreConcept name='Upside Down' pathConcept={pathConceptDetails.conceptUpsideDown} />
              </Carousel>
            </div>
          </div>
        </div>

        <PopUpSlideImages
          isPopupVisible={isPopupVisible}
          currentIndexImages={currentIndexImages}
          setCurrentIndexImages={setCurrentIndexImages}
          listImageDetail={listConceptDetail}
          setIsPopupVisible={setIsPopupVisible}
        />
      </div>
    </>
  )
}
