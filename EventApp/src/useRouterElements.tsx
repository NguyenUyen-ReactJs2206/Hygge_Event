import { useRoutes } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Concept from './pages/Concept'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import path from './constants/path'
import pathConceptDetails from './constants/pathConceptDetails'
import ConceptDetail from './pages/ConceptDetail'
import {
  listConceptBeatyAndTheBeast,
  listConceptBridgerton,
  listConceptElegantLove,
  listConceptRapunzel,
  listConceptTheGreatestShowman,
  listConceptUpsideDown
} from './api/conceptDetails.api'
import pathGalleryDetails from './constants/pathGalleryDetails'
import GalleryDetail from './pages/GalleryDetail/GalleryDetail'
import {
  listBeautyAndTheBeast,
  listRainForest,
  listTheGreatestShowman,
  listUnderTheSea,
  listUpsideDown
} from './api/GalleryDetail.api'

export default function useRouterElements() {
  const routes = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.aboutUs,
      element: (
        <MainLayout>
          <AboutUs />
        </MainLayout>
      )
    },
    {
      path: path.blog,
      element: (
        <MainLayout>
          <Blog />
        </MainLayout>
      )
    },
    {
      path: path.concept,
      element: (
        <MainLayout>
          <Concept />
        </MainLayout>
      )
    },
    {
      path: path.contact,
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    },
    {
      path: path.gallery,
      element: (
        <MainLayout>
          <Gallery />
        </MainLayout>
      )
    },
    {
      path: path.testimonials,
      element: (
        <MainLayout>
          <Testimonials />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptRapunzel,
      element: (
        <MainLayout>
          <ConceptDetail name='Rapunzel' listConceptDetail={listConceptRapunzel} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptBridgerton,
      element: (
        <MainLayout>
          <ConceptDetail name='Bridgeton' listConceptDetail={listConceptBridgerton} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptBeatyAndTheBeast,
      element: (
        <MainLayout>
          <ConceptDetail name='Beaty And The Beast' listConceptDetail={listConceptBeatyAndTheBeast} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptElegantLove,
      element: (
        <MainLayout>
          <ConceptDetail name='Elegant Love' listConceptDetail={listConceptElegantLove} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptTheGreatestShowman,
      element: (
        <MainLayout>
          <ConceptDetail name='The Greatest Showman' listConceptDetail={listConceptTheGreatestShowman} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptUpsideDown,
      element: (
        <MainLayout>
          <ConceptDetail name='Upside Down' listConceptDetail={listConceptUpsideDown} />
        </MainLayout>
      )
    },
    {
      path: pathGalleryDetails.galleryTheGreatestShowman,
      element: (
        <MainLayout>
          <GalleryDetail name='The Greatest Showman' listGalleryDetail={listTheGreatestShowman} />
        </MainLayout>
      )
    },
    {
      path: pathGalleryDetails.galleryUnderTheSea,
      element: (
        <MainLayout>
          <GalleryDetail name='Under The Sea' listGalleryDetail={listUnderTheSea} />
        </MainLayout>
      )
    },
    {
      path: pathGalleryDetails.galleryRainforest,
      element: (
        <MainLayout>
          <GalleryDetail name='Rainforest' listGalleryDetail={listRainForest} />
        </MainLayout>
      )
    },
    {
      path: pathGalleryDetails.galleryBeautyAndTheBeast,
      element: (
        <MainLayout>
          <GalleryDetail name='Beauty And The Beast' listGalleryDetail={listBeautyAndTheBeast} />
        </MainLayout>
      )
    },
    {
      path: pathGalleryDetails.galleryUpsideDown,
      element: (
        <MainLayout>
          <GalleryDetail name='Upside Down' listGalleryDetail={listUpsideDown} />
        </MainLayout>
      )
    }
  ])
  return routes
}
