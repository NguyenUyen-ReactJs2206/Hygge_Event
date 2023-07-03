import { Fragment } from 'react'
type Props = {
  listImageDetail: string[]
  currentIndexImages: number
  setCurrentIndexImages: React.Dispatch<React.SetStateAction<number>>
}
export default function CarouselImage({ listImageDetail, currentIndexImages, setCurrentIndexImages }: Props) {
  const handleChangeImage = (index: number) => {
    setCurrentIndexImages(index)
  }
  return (
    <div className='absolute bottom-0 left-0 right-0 mx-auto h-[100px] max-w-[1400px] bg-[#0d0a0a]'>
      <div className='mt-2'>
        <div className='flex gap-1 overflow-hidden'>
          {listImageDetail.map((image, index) => (
            <Fragment key={index}>
              <button onClick={() => handleChangeImage(index)}>
                <img
                  src={image}
                  alt={image}
                  className={`h-[84px] w-[120px] rounded-md border-2 border-white object-cover transition-all duration-300 ${
                    index === currentIndexImages ? 'border-red-700' : ''
                  } hover:border-red-700 hover:duration-300`}
                />
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
