import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"


type Props = {}

const index = (props: Props) => {
  return (
    <div>
        <section id='navbar'>
          <Navbar />
        </section>


        <section>
          <Footer />
        </section>
    </div>
  )
}

export default index