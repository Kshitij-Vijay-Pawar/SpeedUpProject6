import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import About from './About';
import Skills from '../components/Skills';
import Projects from './Projects';
import Experience from '../components/Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    </>
  );
};

export default Home;
