import Hero from './components/Hero'
import Houses from './components/Houses'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='hero'>
        <Hero />
      </section>

      <section id=''>
        <Houses />
      </section>
    </div>
  )
}
