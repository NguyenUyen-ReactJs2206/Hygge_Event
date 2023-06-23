import featureOne from 'src/assets/images/featured/featuredOne.png'
import featureTow from 'src/assets/images/featured/featuredTwo.png'
import featureThree from 'src/assets/images/featured/featuredThree.png'
import featureFor from 'src/assets/images/featured/featuredFor.png'
import featureFive from 'src/assets/images/featured/featuredFive.png'
import featureSix from 'src/assets/images/featured/featuredSix.png'
import avatarOne from 'src/assets/images/avatar/avatarOne.png'
import avatarTwo from 'src/assets/images/avatar/avatarTwo.png'
import avatarThree from 'src/assets/images/avatar/avatarThree.png'
import articleOne from '../assets/images/latestArticle/latest-article-one.png'
import articleTwo from '../assets/images/latestArticle/latest-article-two.png'
import articleThree from '../assets/images/latestArticle/latest-article-three.png'
import articleFour from '../assets/images/latestArticle/latest-article-four.png'

export const homeApi = [
  {
    banners: [
      'https://jetaimeart.com/wp-content/uploads/2021/05/slider-10.jpg',
      'https://jetaimeart.com/wp-content/uploads/2021/05/slider-03.jpg',
      'https://jetaimeart.com/wp-content/uploads/2021/05/slider-01.jpg',
      'https://jetaimeart.com/wp-content/uploads/2021/05/slider-09.jpg',
      'https://jetaimeart.com/wp-content/uploads/2021/05/slider-07.jpg'
    ],
    services: [
      {
        serviceName: 'Wedding Decoration',
        description: 'Thank you for choosing us as a companion to your bigday.'
      },
      {
        serviceName: 'Wedding Planning',
        description: 'Thank you for choosing us as a companion to your bigday.'
      },
      {
        serviceName: 'Event Decoration',
        description: 'Thank you for choosing us as a companion to your bigday.'
      },
      {
        serviceName: 'Event Planning',
        description: 'Thank you for choosing us as a companion to your bigday.'
      }
    ],
    features: [`${featureOne}`, `${featureTow}`, `${featureThree}`, `${featureFor}`, `${featureFive}`, `${featureSix}`],
    corporationIdentifyProgram: [
      {
        nameCip: 'UniQue Design',
        descriptionCip: 'Stay abreast of the latest trends and set the syandard with our designs.'
      },
      {
        nameCip: 'Credibility',
        descriptionCip: 'We are dedicated to providing our customers with unwavering commitment.'
      },
      {
        nameCip: 'Reasonable price',
        descriptionCip: 'The pricing of our service is competitive and offers excellent value.'
      }
    ],
    carousels: [
      {
        carouselPost: [
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Quynh Dang - CEO'
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hictory aspernatur praesentium eveniet?',
            name: 'Hai Hoai - CEO'
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Hoang Ha - CEO'
          },
          {
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Huy Hoang - CEO'
          }
        ]
      },
      {
        carouselReview: [
          {
            testimonial: 'Bridegerton Concept',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Hoang Nhu - Out valued bride'
          },
          {
            testimonial: 'Rapunzel Concept',
            description:
              'Lorem ipsum dolor elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Hai Hoai - Out valued bride'
          },
          {
            testimonial: 'Beaty Concept',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! Voluptatum dolor deleniti sequi ut aperiam hic, ipsam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Hoang Ha - Out valued bride'
          },
          {
            testimonial: 'Elegant Concept',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere commodi vitae! psam laudantium consequuntur quas magnam unde nam expedita aspernatur praesentium eveniet?',
            name: 'Huy Hoang - Out valued bride'
          }
        ]
      }
    ],
    members: [
      {
        img: `${avatarOne}`,
        name: 'Quynh Dang',
        position: 'CEO',
        linkFacebook: '',
        linkTwitter: '',
        linkInstagram: '',
        linkT: ''
      },
      {
        img: `${avatarTwo}`,
        name: 'Tram Nguyen',
        position: 'Fouder',
        linkFacebook: '',
        linkTwitter: '',
        linkInstagram: '',
        linkT: ''
      },
      {
        img: `${avatarThree}`,
        name: 'Dao Tran',
        position: 'Accounting HR Manager',
        linkFacebook: '',
        linkTwitter: '',
        linkInstagram: '',
        linkT: ''
      }
    ],
    latestArticles: [
      {
        image: `${articleOne}`,
        nameArticle: 'Wedding Themes Ideas for Any Styles',
        time: 'JUNE 4, 2023 - 4 Likes'
      },
      {
        image: `${articleTwo}`,
        nameArticle: 'Wedding Themes Ideas for Any Styles',
        time: 'JUNE 4, 2023 - 4 Likes'
      },
      {
        image: `${articleThree}`,
        nameArticle: 'Wedding Themes Ideas for Any Styles',
        time: 'JUNE 4, 2023 - 4 Likes'
      },
      {
        image: `${articleFour}`,
        nameArticle: 'Wedding Themes Ideas for Any Styles',
        time: 'JUNE 4, 2023 - 4 Likes'
      }
    ]
  }
]