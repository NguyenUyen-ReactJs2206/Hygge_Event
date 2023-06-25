export interface HomeType {
  banners: string[]
  services: {
    serviceName: string
    description: string
  }[]
  features: string[]
  corporationIdentifyProgram: {
    nameCip: string
    descriptionCip: string
  }[]
  carousels: (
    | {
        carouselPost: {
          description: string
          name: string
        }[]
      }
    | {
        carouselReview: {
          testimonial: string
          description: string
          name: string
        }[]
      }
  )[]
  members: {
    img: string
    name: string
    position: string
    linkFacebook: string
    linkTwitter: string
    linkInstagram: string
    linkT: string
  }[]
  latestArticles: {
    image: string
    nameArticle: string
    time: string
  }[]
}
