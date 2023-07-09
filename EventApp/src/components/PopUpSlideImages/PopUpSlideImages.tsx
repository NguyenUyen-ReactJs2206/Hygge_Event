import { useState, Fragment } from 'react'
import saveAs from 'file-saver'
import { createPortal } from 'react-dom'
import Carousel from 'react-multi-carousel'
import 'src/sass/index.scss'

type Props = {
  isPopupVisible: boolean
  listImageDetail: string[]
  currentIndexImages: number
  setCurrentIndexImages: React.Dispatch<React.SetStateAction<number>>
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function PopUpSlideImages({
  setIsPopupVisible,
  listImageDetail,
  currentIndexImages,
  setCurrentIndexImages
}: Props) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 10,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 8,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 768, min: 680 },
      items: 6,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 4,
      slidesToSlide: 2
    }
  }
  const image = listImageDetail.map((image, index) => (
    <Fragment key={index}>
      <button onClick={() => handleChangeImage(index)}>
        <img
          src={image}
          alt={image}
          className={`h-[12vh] w-[150px] rounded-md object-cover transition-all duration-300 ${
            index === currentIndexImages ? 'border-2 border-red-700' : 'border-2 border-white '
          } hover:border-red-700 hover:duration-300`}
        />
      </button>
    </Fragment>
  ))

  const prevImage = () => {
    setCurrentIndexImages((curr) => (curr === 0 ? listImageDetail.length - 1 : curr - 1))
  }

  const nextImage = () => {
    setCurrentIndexImages((curr) => (curr === listImageDetail.length - 1 ? 0 : curr + 1))
  }

  const handleClosePopup = () => setIsPopupVisible(false)
  const handleChangeImage = (index: number) => {
    setCurrentIndexImages(index)
  }

  const handleDownload = () => {
    // // Tạo một phần tử liên kết ảo
    // const downloadLink = document.createElement('a')
    // downloadLink.href = listImageDetail[currentIndexImages]
    // downloadLink.download = `${listImageDetail[currentIndexImages]}`
    // // Kích hoạt việc tải về
    // downloadLink.click()
    // axios({
    //   url: `${listImageDetail[currentIndexImages]}`, // Thay đổi thành đường dẫn ảnh thực tế
    //   method: 'GET',
    //   responseType: 'blob' // Sử dụng responseType là 'blob' để tải xuống thành công
    // })
    //   .then((response) => {
    //     const blob = new Blob([response.data])
    //     console.log(blob, 'bbbbbbbb')
    //     saveAs(blob, `${listImageDetail[currentIndexImages]}`) // Thay đổi tên_tệp_tải_xuống.jpg thành tên tệp tin bạn muốn cho tệp đã tải xuống
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    saveAs(listImageDetail[currentIndexImages], `${listImageDetail[currentIndexImages]}`)
  }
  const toggleFullScreen = () => {
    const img = document.getElementById('fullscreen')
    if (isFullScreen) {
      ;(img as HTMLElement).style.width = 'auto'
      ;(img as HTMLElement).style.height = 'auto'
      document.exitFullscreen()
    } else {
      ;(img as HTMLElement).style.width = '100%'
      ;(img as HTMLElement).style.height = '100%'
      document.documentElement.requestFullscreen()
    }
    setIsFullScreen(!isFullScreen)
  }
  return createPortal(
    <div className='fixed inset-0 z-[99999] h-[100vh] w-full bg-black' id='fullscreen'>
      <div className='relative h-[100vh]'>
        <div className='m-auto flex h-[85vh] max-w-[1300px] items-center justify-center'>
          <div className='overflow-hidden'>
            <img
              src={listImageDetail[currentIndexImages]}
              alt={listImageDetail[currentIndexImages]}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 mx-auto h-[15vh] max-w-[1500px] bg-[#0d0a0a]'>
          <div className='mt-2'>
            <Carousel responsive={responsive} centerMode={true} itemClass='carousel-item-padding-4-px'>
              {image}
            </Carousel>
          </div>
        </div>
        <div className='absolute left-0 right-0 top-0 h-[7vh] w-full bg-black/20'>
          <div className='flex items-center justify-between p-4'>
            <div className='text-white/80 hover:text-white'>{`${currentIndexImages + 1}/${
              listImageDetail.length
            }`}</div>
            <div className='flex gap-8 '>
              <button onClick={toggleFullScreen}>
                {isFullScreen && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
                    />
                  </svg>
                )}
                {!isFullScreen && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                    />
                  </svg>
                )}
              </button>
              <button onClick={() => handleDownload()}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                  />
                </svg>
              </button>
              <button onClick={handleClosePopup}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6 cursor-pointer stroke-white/80 hover:stroke-white'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={prevImage}
          className='absolute left-2 top-[40%] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray bg-black text-white/80 transition-all duration-300 hover:bg-white hover:text-black hover:duration-300 lg:left-6 lg:h-12 lg:w-12'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 lg:h-8 lg:w-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75' />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className='absolute right-2 top-[40%] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray bg-black text-white/80 transition-all duration-300 hover:bg-white hover:text-black hover:duration-300 lg:right-6 lg:h-12 lg:w-12'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 lg:h-8 lg:w-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  )
}
