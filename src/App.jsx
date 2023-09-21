import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Provider } from './context/MainContext'
import Recommendations from './sections/Recommendations'
import {Hero,PopularFilms,BestMovie} from './sections/index'
import Overlay from './components/Overlay'
import DarkMode from './components/DarkMode'

function App() {

  return (
    <Provider>
    <main className='relative w-full lg:w-4/5 lg:mx-auto flex flex-col dark' id='main'>
      <Nav/>
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
