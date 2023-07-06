import { useContext } from 'react'
import TheGreatestShowmanOne from 'src/assets/images/gallery/the-greatest-showman-one.png'
import TheGreatestShowmanTwo from 'src/assets/images/gallery/the-greatest-showman-two.png'
import UnderTheSeaOne from 'src/assets/images/gallery/under-the-sea-one.png'
import UnderTheSeaTwo from 'src/assets/images/gallery/under-the-sea-two.png'
import RainforestOne from 'src/assets/images/gallery/rainforest-one.png'
import RainforestTwo from 'src/assets/images/gallery/rainforest-two.png'
import BeautyOne from 'src/assets/images/gallery/beauty-and-the-beast-one.png'
import BeautyTwo from 'src/assets/images/gallery/beauty-and-the-beast-two.png'
import UpsideOne from 'src/assets/images/gallery/upside-down-one.png'
import UpsideTwo from 'src/assets/images/gallery/upside-down-two.png'
import UnderLineEffect from 'src/components/UnderlineEffect'
import { Link } from 'react-router-dom'
import pathGalleryDetails from 'src/constants/pathGalleryDetails'
import { AppContext } from 'src/contexts/app.context'

export default function Gallery() {
  const { handleNextPage } = useContext(AppContext)

  return (
    <>
      <div className='gallery-page' id='top'>
        <div className='py-20 lg:pt-[70px]'>
          <div className='mx-auto max-w-[1500px]'>
            <div className='mb-4 flex flex-wrap justify-center gap-x-4 gap-y-0 lg:mb-0 lg:grid lg:grid-cols-5 lg:gap-4'>
              <div className='lg:col-span-1'>
                <Link
                  to={pathGalleryDetails.galleryTheGreatestShowman}
                  onClick={handleNextPage}
                  className='text-center lg:py-4'
                >
                  <div className='group relative lg:static'>
                    <h2 className='cursor-pointer py-1 text-sm font-medium uppercase tracking-wide text-cyan-500 duration-300 hover:text-blue hover:transition-all hover:duration-300 lg:py-2'>
                      The Greatest Showman
                    </h2>
                    <UnderLineEffect color='blue' />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-1'>
                <Link
                  to={pathGalleryDetails.galleryUnderTheSea}
                  onClick={handleNextPage}
                  className='text-center lg:py-4'
                >
                  <div className='group relative lg:static'>
                    <h2 className='cursor-pointer py-1 text-sm font-medium uppercase tracking-wide text-cyan-500 duration-300 hover:text-blue hover:transition-all hover:duration-300'>
                      Under The Sea
                    </h2>
                    <UnderLineEffect color='blue' />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-1'>
                <Link
                  to={pathGalleryDetails.galleryRainforest}
                  onClick={handleNextPage}
                  className='text-center lg:py-4'
                >
                  <div className='group relative lg:static'>
                    <h2 className='cursor-pointer py-1 text-sm font-medium uppercase tracking-wide text-cyan-500 duration-300 hover:text-blue hover:transition-all hover:duration-300'>
                      Rainforest
                    </h2>
                    <UnderLineEffect color='blue' />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-1'>
                <Link
                  to={pathGalleryDetails.galleryBeautyAndTheBeast}
                  onClick={handleNextPage}
                  className='text-center lg:py-4'
                >
                  <div className='group relative lg:static'>
                    <h2 className='cursor-pointer py-1 text-sm font-medium uppercase tracking-wide text-cyan-500 duration-300 hover:text-blue hover:transition-all hover:duration-300'>
                      Beauty And The Beast
                    </h2>
                    <UnderLineEffect color='blue' />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-1'>
                <Link
                  to={pathGalleryDetails.galleryUpsideDown}
                  onClick={handleNextPage}
                  className='text-center lg:py-4'
                >
                  <div className='group relative lg:static'>
                    <h2 className='cursor-pointer py-1 text-sm font-medium uppercase tracking-wide text-cyan-500 duration-300 hover:text-blue hover:transition-all hover:duration-300'>
                      Upside Down
                    </h2>
                    <UnderLineEffect color='blue' />
                  </div>
                </Link>
              </div>
            </div>
            <div className='grid grid-cols-5 gap-x-4 lg:gap-4'>
              <div className='col-span-5 lg:col-span-1'>
                <div className='mx-auto flex max-w-[600px] items-center  justify-center sm:gap-2 md:gap-4 lg:block'>
                  <Link
                    to={pathGalleryDetails.galleryTheGreatestShowman}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${TheGreatestShowmanOne}`}
                      alt={`${TheGreatestShowmanOne}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms] lg:pb-4'
                    />
                  </Link>
                  <Link
                    to={pathGalleryDetails.galleryTheGreatestShowman}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${TheGreatestShowmanTwo}`}
                      alt={`${TheGreatestShowmanTwo}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms]'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-span-5 lg:col-span-1'>
                <div className='mx-auto flex max-w-[600px] items-center justify-center sm:gap-2 md:gap-4 lg:block'>
                  <Link
                    to={pathGalleryDetails.galleryUnderTheSea}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${UnderTheSeaOne}`}
                      alt={`${UnderTheSeaOne}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms] lg:pb-4'
                    />
                  </Link>
                  <Link
                    to={pathGalleryDetails.galleryUnderTheSea}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${UnderTheSeaTwo}`}
                      alt={`${UnderTheSeaTwo}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms]'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-span-5 lg:col-span-1'>
                <div className='mx-auto flex max-w-[600px] items-center justify-center sm:gap-2 md:gap-4 lg:block'>
                  <Link
                    to={pathGalleryDetails.galleryRainforest}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${RainforestOne}`}
                      alt={`${RainforestOne}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms] lg:pb-4'
                    />
                  </Link>
                  <Link
                    to={pathGalleryDetails.galleryRainforest}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${RainforestTwo}`}
                      alt={`${RainforestTwo}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms]'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-span-5 lg:col-span-1'>
                <div className='mx-auto flex max-w-[600px] items-center justify-center sm:gap-2 md:gap-4 lg:block'>
                  <Link
                    to={pathGalleryDetails.galleryBeautyAndTheBeast}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${BeautyOne}`}
                      alt={`${BeautyOne}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms] lg:pb-4'
                    />
                  </Link>
                  <Link
                    to={pathGalleryDetails.galleryBeautyAndTheBeast}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${BeautyTwo}`}
                      alt={`${BeautyTwo}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms]'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-span-5 lg:col-span-1'>
                <div className='mx-auto flex max-w-[600px] items-center justify-center sm:gap-2 md:gap-4 lg:block'>
                  <Link
                    to={pathGalleryDetails.galleryUpsideDown}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${UpsideOne}`}
                      alt={`${UpsideOne}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms] lg:pb-4'
                    />
                  </Link>
                  <Link
                    to={pathGalleryDetails.galleryUpsideDown}
                    className='h-full w-full cursor-pointer overflow-hidden'
                    onClick={handleNextPage}
                  >
                    <img
                      src={`${UpsideTwo}`}
                      alt={`${UpsideTwo}`}
                      className='h-full w-full scale-100 cursor-pointer transition-all duration-[1000ms] hover:scale-105 hover:duration-[1000ms]'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
