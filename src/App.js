import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Reviews />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
