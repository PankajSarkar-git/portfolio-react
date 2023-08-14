import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Project from "./component/Project";
// import {  Outlet, createBrowserRouter } from "react-router-dom";
// import EducationExperiences from "./component/EducationExperiences";
import EducationExperiences from "./component/EducationExperiences";
import { useState } from "react";

const App = () => {
  const [showComponent, setShowComponent] = useState("home");

  return (
    <div className="main">
      <Navbar setShowComponent={setShowComponent} showComponent={showComponent} />
      {
        showComponent === "home" && <Home/>
      }
      {
        showComponent === "about" && <About/>
      }
      {
        showComponent === "education" && <EducationExperiences/>
      }
      {
        showComponent === "project" && <Project/>
      }
      {
        showComponent === "contact" && <Contact/>
      }
      
    </div>
  );
};



export default App;
