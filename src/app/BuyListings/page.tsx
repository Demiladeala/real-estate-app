import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BuyListings from '../components/BuyListings'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='buyListings'>
        <BuyListings />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default page