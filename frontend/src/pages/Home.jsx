import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Workflow from '../components/sections/Workflow';
import FeaturedWork from '../components/sections/FeaturedWork';
import Automation from '../components/sections/Automation';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Footer from '../components/sections/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Workflow />
      <FeaturedWork />
      <Automation />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
