import Footer from "@/app/components/Footer"
import ListingDetails from "@/app/components/ListingDetails"
import Navbar from "@/app/components/Navbar"


type Props = {}

const index = (props: Props) => {
  return (
    <div>
        <section id='navbar'>
          <Navbar />
        </section>

        <section id="listing-details">
          <ListingDetails />
        </section>


        <section>
          <Footer />
        </section>
    </div>
  )
}

export default index