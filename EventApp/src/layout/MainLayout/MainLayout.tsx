import NavHeader from 'src/components/NavHeader'
import Footer from '../../components/Footer'
import { Link } from 'react-scroll'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <NavHeader />
      {children}
      <Footer />
      <Link
        className='fixed bottom-[10%] right-2 z-[99999999] flex h-12 w-12'
        activeClass='active'
        to='top'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='flex h-full w-full items-center justify-center rounded-full bg-white/70 text-center text-black/70 hover:bg-white hover:text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5' />
          </svg>
        </button>
      </Link>
    </div>
  )
}
