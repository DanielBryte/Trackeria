import About from './components/Layout/About'
import Faq from './components/Layout/Faq'
import Feature from './components/Layout/Feature'
import Hero from './components/Layout/Hero'
import Navbar from './components/Layout/Navbar'



export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Feature />
     <Faq />
    </>
  )
}
