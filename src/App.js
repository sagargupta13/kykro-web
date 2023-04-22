import React from "react";
import Home from "./screen1/home/Home";
import About from "./screen1/about/About";
import Services from "./screen1/services/Services";
import Gallery from "./screen1/gallery/Gallery";
import News from "./screen1/news/News";
import Contact from "./screen1/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavigationBar from "./screen1/navigation_bar/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Home />
      <About />
      <Services />
      <Gallery />
      <News />
      <Contact />
    </div>
  );
};

export default App;
