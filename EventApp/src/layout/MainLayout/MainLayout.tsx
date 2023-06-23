import NavHeader from 'src/components/NavHeader'
import Footer from '../../components/Footer'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <NavHeader />
      {children}
      <Footer />
    </div>
  )
}
