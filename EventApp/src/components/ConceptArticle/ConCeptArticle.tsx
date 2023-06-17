type Props = {
  name: string
}

export default function ConCeptArticle({ name }: Props) {
  return (
    <div>
      <div className='w-full overflow-hidden md:cursor-default'>
        <img
          src='https://www.brides.com/thmb/Nb8-KQb0UbTEh9uymClKoLHhEyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WR-8b335c7adae842dc9f80ec3c4eaf9c48.jpg'
          alt='concept1'
          className='h-[300px] w-full object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] md:h-full md:group-hover:opacity-100'
        />
      </div>
      <div className='absolute inset-0 md:static md:block'>
        <div className='pl-4 pt-4 md:pt-4'>
          <div
            className='translate-y-12 transform opacity-0 transition-all 
            duration-1000 group-hover:translate-y-0
            group-hover:opacity-100 md:translate-y-0
            md:transform-none md:opacity-100
            md:transition-none md:duration-0'
          >
            <h3 className='cursor-default text-3xl font-medium tracking-wide text-blue md:text-3xl md:font-medium'>
              {name}
            </h3>
            <button className='hover:underline-effect underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
