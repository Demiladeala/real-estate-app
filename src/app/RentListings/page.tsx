import React from 'react'
import RentListings from '../components/RentListings'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='rentListings'>
        <RentListings />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default page