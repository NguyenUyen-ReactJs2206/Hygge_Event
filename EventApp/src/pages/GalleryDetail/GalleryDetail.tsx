type Props = {
  name: string
  listGalleryDetail: string[]
}

export default function GalleryDetail({ name, listGalleryDetail }: Props) {
  return (
    <div className='gallery-detail py-24' id='top'>
      <div className='container'>
        <h1 className='mb-4 p-4 text-3xl font-semibold tracking-wider text-gray md:p-10'>{name}</h1>
        <div className='grid gap-y-1'>
          {listGalleryDetail.slice(0, 4).map((image, index) => (
            <div key={index} className='mx-auto h-full max-w-[1000px] cursor-pointer overflow-hidden'>
              <img src={image} alt={image} className='h-full w-[1000px] object-cover' />
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button className='my-10 flex-shrink-0 rounded-sm border border-gray/50 px-6 py-2 text-center text-lg uppercase tracking-widest text-gray/50 hover:border-gray/70 hover:text-gray/70'>
            View full album
          </button>
        </div>
        <hr className='mx-auto max-w-[1000px] text-gray/10' />
        <div className='mx-auto my-10 max-w-[1000px]'>
          <h4 className='py-4 text-2xl font-medium tracking-wider text-gray'>More Galleries</h4>
        </div>
      </div>
    </div>
  )
}