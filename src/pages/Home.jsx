import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Cyber from '../components/Cyber';
import CyberMarket from '../components/CyberMarket';
import CyberMentor from '../components/CyberMentor';
import About from '../components/About';
import FooterSect from '../components/FooterSect';

export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-full bg-darkGray">
        <Navbar />
        <Hero />
      </div>

      <div className="min-h-screen min-w-full bg-lightGray">
        <Skills />
        <Projects />
        <Cyber />
        <CyberMarket />
        <CyberMentor />
        <About />
        <FooterSect />
      </div>
    </>
  );
}
