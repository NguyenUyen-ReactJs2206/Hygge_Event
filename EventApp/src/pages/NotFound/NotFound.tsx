import { useContext } from 'react'

import { Link } from 'react-router-dom'
import { AppContext } from 'src/contexts/app.context'

export default function NotFound() {
  const { handleNextPage } = useContext(AppContext)

  return (
    <div className='bg-white bg-gradient-to-b from-cyan-400 to-blue pb-8'>
      <div className='m-auto flex min-h-screen w-9/12 items-center justify-center py-16'>
        <div className='overflow-hidden bg-gradient-to-t from-cyan-400 to-blue pb-8  shadow sm:rounded-lg'>
          <div className=' border-gray-200 border-t  pt-8 text-center text-white'>
            <h1 className='text-green animate-ping text-9xl font-bold'>404</h1>
            <h1 className='animate-bounce py-8 text-6xl font-medium'>oops! Page not found</h1>
            <p className='px-12 pb-8 text-2xl font-medium'>
              Oops! The page you are looking htmlFor does not exist. It might have been moved or deleted.
            </p>
            <div className='animate-bounce transition-all duration-200 hover:animate-none hover:duration-200'>
              <Link
                to='/'
                onClick={handleNextPage}
                className='mr-6 rounded-md bg-gradient-to-br from-white to-blue px-6 py-3 font-semibold text-white transition-all duration-300 hover:animate-none hover:from-blue hover:to-cyan-200 hover:text-blue hover:duration-300'
              >
                GO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
