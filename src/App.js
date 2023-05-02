import React from "react";

import Home from "./screen1/home/Home";
import About from "./screen1/about/About";
import Services from "./screen1/services/Services";
import Gallery from "./screen1/gallery/Gallery";
import CardData from "./screen1/gallery/CardData";
import News from "./screen1/news/News";
import Contact from "./screen1/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavigationBar from "./screen1/navigation_bar/NavigationBar";
import Team from "./screen1/team/Team";
import TeamData from "./screen1/team/TeamData";
import 'font-awesome/css/font-awesome.min.css';
import NewsData from "./screen1/news/NewsData";


const App = () => {
  return (
    <div>
      {/* <NavigationBar/> */}
      <Home />
      <About />
      <Services />
      <Gallery details={CardData}/>
      <Team details={TeamData}/>
      <News details={NewsData}/>
      <Contact />
    </div>
    
  );
};

export default App;
