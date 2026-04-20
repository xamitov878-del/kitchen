import Address from './components/address/Address'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Restaurant from "./components/restaurant/Restaurant"
import Specialities from './components/specialities/Specialities'

const App = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero/>
        <Restaurant/>
        <Address/>
        <Specialities/>
    </main>
    <Footer/>
    </>
  )
}

export default App