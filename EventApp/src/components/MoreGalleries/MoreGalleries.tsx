import { Link } from 'react-router-dom'
type Props = {
  name: string
  pathGalleries: string
  image: string
}

export default function MoreGalleries({ name, pathGalleries, image }: Props) {
  return (
    <div className='mx-4'>
      <div className='group relative cursor-pointer'>
        <Link to={pathGalleries}>
          <div className='mx-auto h-[300px] w-full cursor-pointer overflow-hidden sm:h-[300px] md:h-[400px]'>
            <img
              src={image}
              alt='concept1'
              className='h-full w-full cursor-pointer object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] '
            />
          </div>
        </Link>
        <div className='absolute bottom-2 left-4 h-fit w-fit'>
          <div className=''>
            <div
              className='translate-y-0 transform opacity-100 transition-all
        duration-1000 group-hover:-translate-y-2 group-hover:opacity-100'
            >
              <h3 className='cursor-default text-base font-medium tracking-wide text-black sm:text-xl'>{name}</h3>
              <Link to={pathGalleries}>
                <button className='underline-effect hover:underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300 sm:text-base'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
