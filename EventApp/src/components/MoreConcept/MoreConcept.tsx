import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

type Props = {
  name: string
  pathConcept: string
}

export default function MoreConcept({ name, pathConcept }: Props) {
  return (
    <div>
      <div className='group relative cursor-pointer'>
        <Link to={pathConcept}>
          <div className='mx-auto h-[200px] w-full cursor-pointer overflow-hidden px-2 sm:h-[300px] md:h-[400px]'>
            <img
              src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
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
              <h3 className='cursor-default text-base font-medium tracking-wide text-blue sm:text-lg'>{name}</h3>
              <Link to={pathConcept}>
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
