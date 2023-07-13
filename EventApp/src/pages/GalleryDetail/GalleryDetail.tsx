import Carousel from 'react-multi-carousel'
import { useState, useContext } from 'react'
import { responsive } from 'src/api/conceptDetails.api'
import MoreGalleries from 'src/components/MoreGalleries'
import pathGalleryDetails from 'src/constants/pathGalleryDetails'
import ImageGalleryTheGreatestShowman from 'src/assets/images/gallery/the-greatest-showman-one.png'
import ImageGalleryUnderTheSea from 'src/assets/images/gallery/under-the-sea-one.png'
import ImageGalleryRainforest from 'src/assets/images/gallery/rainforest-one.png'
import ImageGalleryBeatyAndTheBeast from 'src/assets/images/gallery/beauty-and-the-beast-one.png'
import ImageGalleryUpsideDown from 'src/assets/images/gallery/upside-down-one.png'
import PopUpSlideImages from 'src/components/PopUpSlideImages'
import { AppContext } from 'src/contexts/app.context'
import { useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

type Props = {
  name: string
  listGalleryDetail: string[]
}

export default function GalleryDetail({ name, listGalleryDetail }: Props) {
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
    navigate(`${path.gallery}`)
  }
  return (
    <div className='gallery-detail py-24' id='top'>
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

          <span>ComeBack</span>
        </button>
      </div>
      <div className='container'>
        <h1 className='mb-4 p-4 text-3xl font-semibold tracking-wider text-gray md:p-10'>{name}</h1>
        <div className='grid gap-y-1'>
          {listGalleryDetail.slice(0, 4).map((image, index) => (
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
          <h4 className='py-4 text-2xl font-medium tracking-wider text-gray'>More Galleries</h4>
          <Carousel responsive={responsive}>
            <MoreGalleries
              name='The Greatest Showman'
              pathGalleries={pathGalleryDetails.galleryTheGreatestShowman}
              image={ImageGalleryTheGreatestShowman}
            />

            <MoreGalleries
              name='Under The Sea'
              pathGalleries={pathGalleryDetails.galleryUnderTheSea}
              image={ImageGalleryUnderTheSea}
            />

            <MoreGalleries
              name='Rainforest'
              pathGalleries={pathGalleryDetails.galleryRainforest}
              image={ImageGalleryRainforest}
            />

            <MoreGalleries
              name='Beauty And The Beast'
              pathGalleries={pathGalleryDetails.galleryBeautyAndTheBeast}
              image={ImageGalleryBeatyAndTheBeast}
            />

            <MoreGalleries
              name='Upside Down'
              pathGalleries={pathGalleryDetails.galleryUpsideDown}
              image={ImageGalleryUpsideDown}
            />
          </Carousel>
        </div>
      </div>

      {isPopupVisible && (
        <PopUpSlideImages
          isPopupVisible={isPopupVisible}
          currentIndexImages={currentIndexImages}
          setCurrentIndexImages={setCurrentIndexImages}
          listImageDetail={listGalleryDetail}
          setIsPopupVisible={setIsPopupVisible}
        />
      )}
    </div>
  )
}
