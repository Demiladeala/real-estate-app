import Banner from './components/Banner'
import ClientsMarquee from './components/ClientsMarquee'
import Experts from './components/Experts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Properties from './components/Properties'
import Services from './components/Services'

export default function Home() {
  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='hero'>
        <Hero />
      </section>

      <section id='services'>
        <Services />
      </section>

      <section id='listings'>
        <Properties />
      </section>

      <section id='banner'>
        <Banner />
      </section>

      <section id='expert'>
        <Experts />
      </section>

      <section id='marquee'>
        <ClientsMarquee />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}
