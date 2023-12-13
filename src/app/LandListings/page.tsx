import React from 'react'
import LandListings from '../components/LandListings'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='landListings'>
        <LandListings />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default page