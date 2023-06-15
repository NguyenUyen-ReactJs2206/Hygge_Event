import NavHeader from '../../components/NavHeader'

export default function Concept() {
  return (
    <div>
      <nav className='fixed w-full border-b border-b-gray/10 bg-white shadow-sm'>
        <NavHeader />
      </nav>

      <div className='py-28'>
        <div className='container'>
          <div className='grid grid-cols-6'>
            <div className='col-span-3'>
              <div className=''>
                <img
                  src='https://images.squarespace-cdn.com/content/v1/56cb90aa7da24f43e1dcc875/1581033531037-34LQY3X4UK8J9WNG0YRQ/eddie-zaratsian-pretty-spring-grey-white-green-wedding-four-seasons-los-angeles-jana-williams-photography-1.jpg'
                  alt='concept1'
                  className='ml-auto mr-auto h-[500px] w-[500px] object-cover'
                />
              </div>
              <h3>Rapunzel</h3>
              <button>Read More</button>
            </div>
            <div className='col-span-3'>
              <div>
                <img src='' alt='' />
              </div>
              <h3>Elegant Love</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
