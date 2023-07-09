import { Fragment } from 'react'
import Carousel from 'react-multi-carousel'
import { members, responsiveForMembers } from 'src/api/home.api'
import Members from '../Members'
import 'src/sass/index.scss'

export default function CarouselMembers() {
  return (
    <div>
      <Carousel
        responsive={responsiveForMembers}
        pauseOnHover={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
        arrows={true}
        itemClass='carousel-item-padding-4-px'
      >
        {members.map((member, index) => (
          <Fragment key={index}>
            <Members name={member.name} posision={member.position} avatar={member.img} />
          </Fragment>
        ))}
      </Carousel>
    </div>
  )
}
