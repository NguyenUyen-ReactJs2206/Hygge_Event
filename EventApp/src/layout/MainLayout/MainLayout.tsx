import { useEffect, useRef, useContext } from 'react'
import NavHeader from 'src/components/NavHeader'
import Footer from '../../components/Footer'
import { Link } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'
import './index.css'
import Loading from 'src/components/Loading'
import { AppContext } from 'src/contexts/app.context'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { setLoading, loading } = useContext(AppContext)
  const nodeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <div>
      {loading && (
        <CSSTransition in={loading} timeout={500} nodeRef={nodeRef} classNames='loading' unmountOnExit>
          <Loading />
        </CSSTransition>
      )}

      <CSSTransition in={!loading} timeout={1000} nodeRef={nodeRef} classNames='page' unmountOnExit>
        <div ref={nodeRef}>
          <NavHeader />
          {children}
          <Footer />
          <Link
            className='fixed bottom-[10%] right-2 z-[999] flex h-12 w-12'
            activeClass='active'
            to='top'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className='flex h-full w-full animate-bounce items-center justify-center rounded-full bg-white/70 text-center text-black/70 hover:bg-white hover:text-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5'
                />
              </svg>
            </button>
          </Link>
        </div>
      </CSSTransition>
    </div>
  )
}
