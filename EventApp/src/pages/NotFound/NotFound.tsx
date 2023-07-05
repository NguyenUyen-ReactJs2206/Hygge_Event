import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-gradient-to-r from-cyan-400 to-blue '>
      <div className='m-auto flex min-h-screen w-9/12 items-center justify-center py-16'>
        <div className='overflow-hidden pb-8 shadow sm:rounded-lg'>
          <div className='border-gray-200 border-t pt-8 text-center text-white'>
            <h1 className='text-green text-9xl font-bold'>404</h1>
            <h1 className='py-8 text-6xl font-medium'>oops! Page not found</h1>
            <p className='px-12 pb-8 text-2xl font-medium'>
              Oops! The page you are looking htmlFor does not exist. It might have been moved or deleted.
            </p>
            <Link
              to='/'
              className=' mr-6 rounded-md bg-gradient-to-r from-white to-cyan-200 px-6 py-3 font-semibold text-blue hover:from-blue hover:to-cyan-200'
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
