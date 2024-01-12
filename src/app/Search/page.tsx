import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";


const page = () => {


  return (
    <div>
      <section id='navbar'>
        <Navbar />
      </section>

      <section id='landListings'>
        <Search />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default page