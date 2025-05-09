import './App.scss'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import MainRouters from './pages'

function App() {

  return (
    <>
      <Navbar />
      <MainRouters />

      <section className='middle__section'></section>
      <Footer />

    </>
  )
}

export default App
