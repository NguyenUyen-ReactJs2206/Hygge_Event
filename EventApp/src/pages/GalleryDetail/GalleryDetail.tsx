import Carousel from 'react-multi-carousel'
import { useState } from 'react'
import { responsive } from 'src/api/conceptDetails.api'
import MoreGalleries from 'src/components/MoreGalleries'
import pathGalleryDetails from 'src/constants/pathGalleryDetails'
import ImageGalleryTheGreatestShowman from 'src/assets/images/gallery/the-greatest-showman-one.png'
import ImageGalleryUnderTheSea from 'src/assets/images/gallery/under-the-sea-one.png'
import ImageGalleryRainforest from 'src/assets/images/gallery/rainforest-one.png'
import ImageGalleryBeatyAndTheBeast from 'src/assets/images/gallery/beauty-and-the-beast-one.png'
import ImageGalleryUpsideDown from 'src/assets/images/gallery/upside-down-one.png'
import PopUpSlideImages from 'src/components/PopUpSlideImages'

type Props = {
  name: string
  listGalleryDetail: string[]
}

export default function GalleryDetail({ name, listGalleryDetail }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const handleShowPopup = () => setIsPopupVisible(true)
  return (
    <div className='gallery-detail py-24' id='top'>
      <div className='container'>
        <h1 className='mb-4 p-4 text-3xl font-semibold tracking-wider text-gray md:p-10'>{name}</h1>
        <div className='grid gap-y-1'>
          {listGalleryDetail.slice(0, 4).map((image, index) => (
            <div key={index} className='mx-auto h-full max-w-[1000px] cursor-pointer overflow-hidden'>
              <img src={image} alt={image} className='h-full w-[1000px] object-cover' />
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button
            onClick={handleShowPopup}
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

      {isPopupVisible && <PopUpSlideImages listImageDetail={listGalleryDetail} setIsPopupVisible={setIsPopupVisible} />}
    </div>
  )
}
