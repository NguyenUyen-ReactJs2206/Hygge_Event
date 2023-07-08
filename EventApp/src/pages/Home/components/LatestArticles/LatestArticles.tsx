import { Link } from 'react-router-dom'

type Props = {
  image: string
  nameArticle: string
  time: string
  pathDetail: string
}

export default function LatestArticles({ image, nameArticle, time, pathDetail }: Props) {
  return (
    <article className='mb-2 object-cover'>
      <div className='h-full w-full overflow-hidden'>
        <img
          src={image}
          alt={image}
          className='h-full w-full object-cover transition-all duration-700 hover:scale-105 hover:duration-700'
        />
      </div>
      <div className='px-2 py-4'>
        <Link
          to={pathDetail}
          className='text-lg font-semibold tracking-wider text-blue hover:underline lg:text-xl lg:tracking-widest'
        >
          {nameArticle}
        </Link>
        <div className='text-sm font-medium tracking-wide lg:tracking-wider'>{time}</div>
      </div>
    </article>
  )
}
