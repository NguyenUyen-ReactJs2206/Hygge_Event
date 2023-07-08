import { Fragment } from 'react'
import Carousel from 'react-multi-carousel'
import { latestArticles, responsiveForLatest } from 'src/api/home.api'
import LatestArticles from '../LatestArticles'

export default function CarouselLatestArticles() {
  return (
    <div>
      <Carousel
        responsive={responsiveForLatest}
        pauseOnHover={false}
        arrows={true}
        itemClass='carousel-item-padding-4-px'
      >
        {latestArticles.map((article, index) => (
          <Fragment key={index}>
            <div className='col-span-4 transition-all duration-500 hover:shadow-md hover:duration-500 sm:col-span-2 md:col-span-1 '>
              <LatestArticles
                pathDetail={article.slug}
                nameArticle={article.nameArticle}
                image={article.image}
                time={article.time}
              />
            </div>
          </Fragment>
        ))}
      </Carousel>
    </div>
  )
}
