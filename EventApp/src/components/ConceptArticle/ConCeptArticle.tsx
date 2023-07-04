import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from 'src/contexts/app.context'
import Loading from '../Loading'

type Props = {
  name: string
  pathConcept: string
}

export default function ConCeptArticle({ name, pathConcept }: Props) {
  const { setLoading, loading } = useContext(AppContext)
  const handleNextPage = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <Link to={pathConcept} onClick={handleNextPage}>
            <div className='w-full overflow-hidden md:cursor-default'>
              <img
                src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
                alt='concept1'
                className='h-[250px] w-full cursor-pointer object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] xs:h-[380px] md:h-full md:group-hover:opacity-100'
              />
            </div>
          </Link>

          <div className='absolute bottom-2 left-4 h-fit w-fit md:static md:block'>
            <div className='md:pt-4'>
              <div
                className='translate-y-0 transform opacity-100 transition-all
            duration-1000 group-hover:-translate-y-2 group-hover:opacity-100 md:translate-y-0 md:transform-none
            md:opacity-100 md:transition-none
            md:duration-0 md:group-hover:translate-y-0'
              >
                <h3 className='cursor-default text-2xl font-medium tracking-wide text-blue md:text-3xl md:font-medium'>
                  {name}
                </h3>

                <Link to={pathConcept} onClick={handleNextPage}>
                  <button className='underline-effect hover:underline-effect text-base text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
