import React from 'react';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Discover from "./components/discover/Discover";
import AboutUs from "./components/about-us/AboutUs.jsx";
import JoinUs from "./components/join-us/Join-us.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
      <>
      <Header />
      <Banner />
      <Discover />
      <AboutUs />
      <JoinUs />
      <Footer />
      </>
      )
}

export default App