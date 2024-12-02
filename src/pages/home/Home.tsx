import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;
