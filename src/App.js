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
        {/* Page Title - Keep it under 60 characters */}
        <title>Pankaj Sarkar | Web Developer | React & JavaScript</title>

        {/* Meta Description - Keep it under 160 characters */}
        <meta
          name="description"
          content="Pankaj Sarkar is a web developer specializing in React, JavaScript, and responsive web development. Explore my portfolio and projects."
        />

        {/* Meta Keywords - List your key skills and name */}
        <meta
          name="keywords"
          content="Pankaj Sarkar, Web Developer, React, JavaScript, Frontend Developer, Portfolio, Responsive Design"
        />

        {/* Canonical URL - Helps search engines know the main page */}
        <link
          rel="canonical"
          href="https://pankaj-sarkar-pankajsarkar-git.vercel.app/"
        />

        {/* Robots - Tells search engines to index and follow links */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Pankaj Sarkar - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the web development projects and skills of Pankaj Sarkar, specializing in React and JavaScript."
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

        {/* Twitter Card Meta Tags for Social Media Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pankaj Sarkar - Web Developer" />
        <meta
          name="twitter:description"
          content="Explore my web development projects built with React, JavaScript, and modern frontend technologies."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/126690794?v=4"
        />

        {/* Structured Data for Google (JSON-LD Schema) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Sarkar",
            jobTitle: "Web Developer",
            url: "https://pankaj-sarkar-pankajsarkar-git.vercel.app/",
            sameAs: [
              "https://github.com/PankajSarkar-git",
              "https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/",
            ],
            description:
              "Pankaj Sarkar is a web developer with expertise in React, JavaScript, and frontend development.",
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
