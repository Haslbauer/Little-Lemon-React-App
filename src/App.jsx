
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"  
import Hero from "./components/Hero"
import Specials from "./components/Specials"
import BookingTable from "./components/BookingTable"
import Menu from "./components/Menu"
import MediaPlayer from "./components/MediaPlayer"


function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Specials />
        <MediaPlayer />
        <Menu />
        <BookingTable />
      </main>
      <Footer />  
    </>
  )
}

export default App
