import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Provider } from './context/MainContext'
import Recommendations from './sections/Recommendations'
import {Hero,PopularFilms,BestMovie} from './sections/index'
import Overlay from './components/Overlay'

function App() {

  return (
    <Provider>
    <main className='relative w-4/5 mx-auto my-16 flex flex-col'>
      <Nav/>
      <Overlay />
    <section className='relative'>
      <Hero/>
    </section>
    <section className='relative'>
      <PopularFilms />
    </section>
    <section className=''>
      <Recommendations />
    </section>
    <section className='relative'>
      <BestMovie />
    </section>
    <Footer />
    </main>
    </Provider>
  )
}

export default App
