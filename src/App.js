import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Project from "./component/Project";
// import {  Outlet, createBrowserRouter } from "react-router-dom";
// import EducationExperiences from "./component/EducationExperiences";
import EducationExperiences from "./component/EducationExperiences";
import { useState } from "react";
import { Helmet } from "react-helmet";

const App = () => {
  const [showComponent, setShowComponent] = useState("home");

  return (
    <div className="main">
      <Helmet>
        {/* Page Title */}
        <title>Pankaj Sarkar | Web Developer | React & JavaScript</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Pankaj Sarkar is a skilled web developer specializing in React, JavaScript, and frontend development. Explore my portfolio and projects."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Pankaj Sarkar, Web Developer, React Developer, JavaScript, Frontend Developer, Portfolio"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Pankaj Sarkar - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore projects and web development expertise of Pankaj Sarkar, specializing in React and JavaScript."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/126690794?v=4"
        />
        <meta
          property="og:url"
          content="https://pankaj-sarkar-pankajsarkar-git.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pankaj Sarkar - Web Developer" />
        <meta
          name="twitter:description"
          content="Web developer Pankaj Sarkar specializes in React and JavaScript. Check out his portfolio!"
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/126690794?v=4"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://pankaj-sarkar-pankajsarkar-git.vercel.app/"
        />

        {/* Robots Tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar
        setShowComponent={setShowComponent}
        showComponent={showComponent}
      />
      {showComponent === "home" && <Home />}
      {showComponent === "about" && <About />}
      {showComponent === "education" && <EducationExperiences />}
      {showComponent === "project" && <Project />}
      {showComponent === "contact" && <Contact />}
    </div>
  );
};

export default App;
