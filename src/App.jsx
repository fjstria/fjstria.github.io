import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;