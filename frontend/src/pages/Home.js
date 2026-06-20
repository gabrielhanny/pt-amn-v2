import React, { useEffect, useState } from 'react';

import SEO from '../components/SEO';

import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

import Hero from '../components/sections/Hero';
import BrandStatement from '../components/sections/BrandStatement';
import SolutionsOverview from '../components/sections/SolutionsOverview';
import SelectedExperience from '../components/sections/SelectedExperience';
import HowAMNWork from '../components/sections/HowAMNWork';
import IndustriesPreview from '../components/sections/IndustriesPreview';
import FinalCTA from '../components/sections/FinalCTA';

import Footer from '../components/sections/Footer';

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutLoader(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
    <SEO
      title="Hypernusa | Growth Activation Agency Indonesia"
      description="Hypernusa by PT Anak Muda Nusantara helps brands grow through strategy, creative execution, commerce, technology, automation, and AI-powered operations."
      url="https://www.hypernusa.com"
    />
      {showLoader && <Loader fadeOut={fadeOutLoader} />}

      <Navbar />

      <main>
        <Hero />

        <BrandStatement />

         <SolutionsOverview />

        <SelectedExperience />

        <HowAMNWork />

        <IndustriesPreview />

        <FinalCTA /> 
      </main>

      <Footer />
    </>
  );
};

export default Home;