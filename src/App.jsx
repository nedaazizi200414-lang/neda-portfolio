import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import AppProjects from "./Components/AppProjects/AppProjects";
import GraphicProjects from "./Components/GraphicProjects/GraphicProjects";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import GraphicDesign from "./Pages/GraphicDesign/GraphicDesign";
import BrandIdentity from "./Pages/BrandIdentity/BrandIdentity";
import Illustration from "./Pages/Illustration/Illustration";
import InfographicTypography from "./Pages/InfographicTypography/InfographicTypography";
import LogoDesign from "./Pages/LogoDesign/LogoDesign";
import Posters from "./Pages/Posters/Posters";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <AppProjects />

      {/* Graphic Design Section */}
      <GraphicProjects />

      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Graphic Design */}
          <Route
            path="/graphic-design"
            element={<GraphicDesign />}
          />

          <Route
            path="/graphic-design/brand-identity"
            element={<BrandIdentity />}
          />

          <Route
            path="/graphic-design/illustration"
            element={<Illustration />}
          />

          <Route
            path="/graphic-design/infographic"
            element={<InfographicTypography />}
          />

          <Route
            path="/graphic-design/logo-design"
            element={<LogoDesign />}
          />

          <Route
            path="/graphic-design/posters"
            element={<Posters />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;