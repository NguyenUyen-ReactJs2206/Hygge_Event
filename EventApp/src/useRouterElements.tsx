import { useRoutes } from 'react-router-dom'
import { path } from './constants/path'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Concept from './pages/Concept'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'

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
    }
  ])
  return routes
}
