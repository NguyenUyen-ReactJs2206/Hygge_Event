import { LatestArticleContentType } from 'src/types/latestArticle.type'

type Props = {
  latestArticleContent: LatestArticleContentType
}
export default function LatestArticleDetail({ latestArticleContent }: Props) {
  return (
    <div className='py-20 lg:py-28'>
      <div className='mx-auto max-w-[800px] px-4 lg:container lg:px-10'>
        <h1 className='text-2xl font-semibold'>{latestArticleContent.nameArticle}</h1>
        <div className='py-6'>
          <img src={latestArticleContent.image} alt={latestArticleContent.nameArticle} />
        </div>
        <p className='leading-8 tracking-wider'>{latestArticleContent.description}</p>
      </div>
    </div>
  )
}
