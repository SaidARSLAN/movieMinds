import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {Hero,PopularFilms,BestMovie} from './sections/index'

function App() {

  return (
    <main className='relative w-4/5 mx-auto my-16 flex flex-col'>
      <Nav/>
    <section className='relative'>
      <Hero/>
    </section>
    <section className='relative'>
      <PopularFilms />
    </section>
    <section className='relative'>
      <BestMovie />
    </section>
    <Footer />
    </main>
  )
}

export default App
