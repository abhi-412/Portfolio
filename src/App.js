
import './App.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
