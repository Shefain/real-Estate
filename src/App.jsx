import About from "./components/about";
import Available from "./components/available";
import Contact from "./components/contact";
import CTA from "./components/cta";
import Faq from "./components/faq";
import Fearute from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Team from "./components/team";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Fearute />
      <Available />
      <About />
      <CTA />
      <Faq />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
