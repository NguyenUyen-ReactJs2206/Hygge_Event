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
import ConceptDetail from './components/ConceptDetail'
import {
  listConceptBeatyAndTheBeast,
  listConceptBridgerton,
  listConceptElegantLove,
  listConceptRapunzel,
  listConceptTheGreatestShowman,
  listConceptUpsideDown
} from './api/conceptDetails.api'

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
          <ConceptDetail name='Rapunzel' listConcept={listConceptRapunzel} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptBridgerton,
      element: (
        <MainLayout>
          <ConceptDetail name='Bridgeton' listConcept={listConceptBridgerton} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptBeatyAndTheBeast,
      element: (
        <MainLayout>
          <ConceptDetail name='Beaty And TheBeast' listConcept={listConceptBeatyAndTheBeast} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptElegantLove,
      element: (
        <MainLayout>
          <ConceptDetail name='Elegant Love' listConcept={listConceptElegantLove} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptTheGreatestShowman,
      element: (
        <MainLayout>
          <ConceptDetail name='The Greatest Showman' listConcept={listConceptTheGreatestShowman} />
        </MainLayout>
      )
    },
    {
      path: pathConceptDetails.conceptUpsideDown,
      element: (
        <MainLayout>
          <ConceptDetail name='Upside Down' listConcept={listConceptUpsideDown} />
        </MainLayout>
      )
    }
  ])
  return routes
}
