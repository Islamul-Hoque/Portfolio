import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='sticky top-0 z-5000'><Navbar/></div>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
