import Carousel from 'react-multi-carousel'
import CorporationIdentifyProgramHome from '../CorporationIdentifyProgramHome'
import 'src/sass/index.scss'
import { corporationIdentifyProgram, responsiveForCip } from 'src/api/home.api'

export default function CarouselComponent() {
  return (
    <div className=''>
      <Carousel
        responsive={responsiveForCip}
        pauseOnHover={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        arrows={true}
        itemClass='carousel-item-padding-4-px'
      >
        <div className='h-full w-full border-t border-t-gray/5 bg-white p-2 '>
          <div className='p-2 shadow-md transition-all duration-700 hover:shadow-2xl hover:duration-700'>
            <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12 '>
              <div className='relative h-20 w-20 border-2 border-gray/60'>
                <div className='absolute left-0 top-0 h-[25px] w-[50px] border-b-2 border-r-2 border-gray/60'></div>
                <div className='absolute right-0 top-0 h-[25px] w-[30px] border-b-2 border-gray/60'></div>
              </div>
            </div>
            <CorporationIdentifyProgramHome
              nameCip={corporationIdentifyProgram[0].nameCip}
              descriptionCip={corporationIdentifyProgram[0].descriptionCip}
            />
          </div>
        </div>
        <div className='h-full w-full border-t border-t-gray/5 bg-white p-2 '>
          <div className='p-2 shadow-md transition-all duration-700 hover:shadow-2xl hover:duration-700'>
            <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12 '>
              <div className='relative h-20 w-20 border-2 border-gray/60'>
                <div className='absolute right-0 top-0 h-[25px] w-[30px] border-b-2 border-l-2 border-gray/60'></div>
                <div className='absolute bottom-0 right-0 h-[55px] w-[30px] border-l-2 border-gray/60'></div>
              </div>
            </div>
            <CorporationIdentifyProgramHome
              nameCip={corporationIdentifyProgram[1].nameCip}
              descriptionCip={corporationIdentifyProgram[1].descriptionCip}
            />
          </div>
        </div>
        <div className='h-full w-full border-t border-t-gray/5 bg-white p-2 '>
          <div className='p-2 shadow-md transition-all duration-700 hover:shadow-2xl hover:duration-700'>
            <div className='flex justify-center md:py-6 lg:pb-8 lg:pt-12 '>
              <div className='relative h-20 w-20 border-2 border-gray/60'>
                <div className='absolute left-0 top-0 h-[50px] w-[50px] border-b-2 border-r-2 border-gray/60'></div>
                <div className='absolute right-0 top-0 h-[50px] w-[30px] border-b-2 border-gray/60'></div>
              </div>
            </div>
            <CorporationIdentifyProgramHome
              nameCip={corporationIdentifyProgram[2].nameCip}
              descriptionCip={corporationIdentifyProgram[2].descriptionCip}
            />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
