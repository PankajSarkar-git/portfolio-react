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
        {/* Page Title - Include your name and profession */}
        <title>Pankaj Sarkar | Web Developer | React & JavaScript Expert</title>

        {/* Meta Description - Unique and concise */}
        <meta
          name="description"
          content="Pankaj Sarkar is a professional web developer specializing in React, JavaScript, and frontend development. View projects and services."
        />

        {/* Meta Keywords - Relevant to your profession and skills */}
        <meta
          name="keywords"
          content="Pankaj Sarkar, Web Developer, React, JavaScript, Frontend Developer, JavaScript Expert, React Developer"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://pankaj-sarkar-pankajsarkar-git.vercel.app/"
        />

        {/* Robots Tag - Ensures the site is indexed and followed */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Pankaj Sarkar - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Discover the web development expertise of Pankaj Sarkar in React, JavaScript, and modern frontend frameworks."
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

        {/* Twitter Card Meta Tags for Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pankaj Sarkar - Web Developer | React & JavaScript"
        />
        <meta
          name="twitter:description"
          content="Explore web development projects and skills by Pankaj Sarkar, specializing in React and frontend technologies."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/126690794?v=4"
        />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Author Tag - Helps identify the creator */}
        <meta name="author" content="Pankaj Sarkar" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#317EFB" />

        {/* Dublin Core Meta Tags for Academic and Governmental Sites (Optional, but adds credibility) */}
        <meta name="DC.title" content="Pankaj Sarkar - Web Developer" />
        <meta name="DC.creator" content="Pankaj Sarkar" />
        <meta name="DC.subject" content="React, JavaScript, Web Development" />
        <meta
          name="DC.description"
          content="Pankaj Sarkar's web development portfolio. Explore projects built using React and modern web technologies."
        />
        <meta
          name="DC.publisher"
          content="https://pankaj-sarkar-pankajsarkar-git.vercel.app/"
        />
        <meta name="DC.format" content="text/html" />
        <meta name="robots" content="noindex"/>
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://pankaj-sarkar-pankajsarkar-git.vercel.app/",
            "@type": "Person",
            name: "Pankaj Sarkar",
            jobTitle: "Web Developer",
            url: "https://pankaj-sarkar-pankajsarkar-git.vercel.app/",
            sameAs: [
              "https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/",
              "https://github.com/PankajSarkar-git",
            ],
            description:
              "Pankaj Sarkar specializes in web development using React, JavaScript, and modern frontend technologies.",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            image: "https://avatars.githubusercontent.com/u/126690794?v=4",
          })}
        </script>
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
