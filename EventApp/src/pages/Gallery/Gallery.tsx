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

export default function Gallery() {
  return (
    <div className='about-us'>
      <div className='py-20 lg:pt-[70px]'>
        <div className='mx-auto max-w-[1500px]'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-1'>
              <div className='text-center'>
                <h2 className='py-6 font-medium uppercase tracking-wider text-cyan-500'>The Greatest Showman</h2>
                <div>
                  <div className='h-full w-full overflow-hidden'>
                    <img
                      src={`${TheGreatestShowmanOne}`}
                      alt={`${TheGreatestShowmanOne}`}
                      className='h-full w-full pb-4'
                    />
                    <img src={`${TheGreatestShowmanTwo}`} alt={`${TheGreatestShowmanTwo}`} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='text-center'>
                <h2 className='py-6 font-medium uppercase tracking-wider text-cyan-500'>Under The Sea</h2>
                <div>
                  <div className='h-full w-full overflow-hidden'>
                    <img src={`${UnderTheSeaOne}`} alt={`${UnderTheSeaOne}`} className='h-full w-full pb-4' />
                    <img src={`${UnderTheSeaTwo}`} alt={`${UnderTheSeaTwo}`} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='text-center'>
                <h2 className='py-6 font-medium uppercase tracking-wider text-cyan-500'>Rainforest</h2>
                <div>
                  <div className='h-full w-full overflow-hidden'>
                    <img src={`${RainforestOne}`} alt={`${RainforestOne}`} className='h-full w-full pb-4' />
                    <img src={`${RainforestTwo}`} alt={`${RainforestTwo}`} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='text-center'>
                <h2 className='py-6 font-medium uppercase tracking-wider text-cyan-500'>Beauty And The Beast</h2>
                <div>
                  <div className='h-full w-full overflow-hidden'>
                    <img src={`${BeautyOne}`} alt={`${BeautyOne}`} className='h-full w-full pb-4' />
                    <img src={`${BeautyTwo}`} alt={`${BeautyTwo}`} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='text-center'>
                <h2 className='py-6 font-medium uppercase tracking-wider text-cyan-500'>Upside Down</h2>
                <div>
                  <div className='h-full w-full overflow-hidden'>
                    <img src={`${UpsideOne}`} alt={`${UpsideOne}`} className='h-full w-full pb-4' />
                    <img src={`${UpsideTwo}`} alt={`${UpsideTwo}`} className='h-full w-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
