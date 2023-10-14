import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

const  App = () => {
  

  return (
    
    <BrowserRouter>
      <div className='bg-hero-pattern bg-no-repeat bg-fixed  bg-center'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech/>
        <Experience />
        <Education />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
    

  )
}

export default App
