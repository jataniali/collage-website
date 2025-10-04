import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/hero'
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Programs'
import Testimonial from './Components/Testimonial/Testimonial'
import Title from './Components/Title/Title'
import Video from './Components/Videoplayer/Video'
const App = () => {

  const [playstate,setPlaystate]=useState(false)
  return (
    <div>
      <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle="OUR PROGRAMS" title="What We Offer"/>
     <Program/>
     <About setPlaystate={setPlaystate}/>
     <Title subtitle="Gallary" title="Campus photos"/>
     <Campus/>
     <Title subtitle="Testimonial" title="What Student Says"/>
     <Testimonial/>
     <Title subtitle="Contact Us" title="Get In Touch"/>
     <Contacts/>
     <Footer/>
     </div>
     <Video playstate={playstate}  setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
