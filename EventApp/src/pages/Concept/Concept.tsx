import ConCeptArticle from '../../components/ConceptArticle'
import '../../sass/index.scss'

export default function Concept() {
  return (
    <div className='concept-page' id='top'>
      <div className='pb-16 pt-28 lg:pt-48'>
        <div className='md:container'>
          <div>
            <h1 className='font mb-4 pl-10 text-4xl font-semibold tracking-wider text-gray md:hidden'>Concepts</h1>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pl-6 lg:pl-10'>
                  <ConCeptArticle name='Rapunzel' />
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pl-24 md:pr-6 md:pt-10 lg:pl-40 lg:pr-10'>
                  <ConCeptArticle name='Bridgerton' />
                </div>
              </div>
            </div>
          </div>
          <div className='md:my-16'>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pl-6 md:pr-24 md:pt-10 lg:pl-10 lg:pr-40 '>
                  <ConCeptArticle name='Beaty And The Beast' />
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pr-6 lg:pr-10'>
                  <ConCeptArticle name='Elegant Love' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='grid grid-cols-6'>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pl-6 lg:pl-10'>
                  <ConCeptArticle name='The Greatest Showman' />
                </div>
              </div>
              <div className='col-span-6 md:col-span-3'>
                <div className='group relative cursor-pointer pl-0 md:cursor-default md:pl-24 md:pr-6 md:pt-10 lg:pl-40 lg:pr-10'>
                  <ConCeptArticle name='Upside Down' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
