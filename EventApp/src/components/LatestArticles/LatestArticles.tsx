type Props = {
  image: string
  nameArticle: string
  time: string
}

export default function LatestArticles({ image, nameArticle, time }: Props) {
  return (
    <article className='object-cover'>
      <div className='h-full w-full'>
        <img src={image} alt={image} className='h-full w-full object-cover' />
      </div>
      <div className='py-4 '>
        <div className='text-lg font-semibold tracking-wider text-blue lg:text-xl lg:tracking-widest xl:text-2xl'>
          {nameArticle}
        </div>
        <div className='text-sm font-medium tracking-wide sm:text-base lg:tracking-wider'>{time}</div>
      </div>
    </article>
  )
}
