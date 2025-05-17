import HeaderClient from '../../../Components/header/HeaderClient'
import Home from './Home'
import Footer from '../../../Components/footer/Footer'

type Props = {}

export default function Accuieil({}: Props) {
  return (
    <>
      <HeaderClient />
      <Home />
      <Footer />
    </>
  )
}