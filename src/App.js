import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./component/Navbar";

const WEBSITE_URL = "https://pankaj-sarkar.vercel.app";
const PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/126690794?v=4";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <Helmet>
        {/* Primary SEO */}
        <title>
          Pankaj Sarkar | Software Engineer | Full Stack Developer | React,
          Next.js, React Native
        </title>

        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Pankaj Sarkar is a Software Engineer with 2+ years of experience building scalable web and mobile applications using React, Next.js, React Native, Node.js, Express.js, MongoDB, JavaScript and TypeScript. Available for Full Stack, Frontend and Mobile Developer roles."
        />

        <meta name="author" content="Pankaj Sarkar" />

        <meta name="robots" content="index, follow" />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#4f46e5" />

        {/* Canonical */}
        <link rel="canonical" href={WEBSITE_URL} />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pankaj Sarkar | React Developer Portfolio"
        />

        <meta
          property="og:description"
          content="Explore the portfolio of Pankaj Sarkar. React & React Native Developer specializing in modern web and mobile applications."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={WEBSITE_URL} />

        <meta property="og:image" content={PROFILE_IMAGE} />

        <meta property="og:site_name" content="Pankaj Sarkar Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Pankaj Sarkar | React Developer" />

        <meta
          name="twitter:description"
          content="React & React Native Developer Portfolio showcasing projects, skills and experience."
        />

        <meta name="twitter:image" content={PROFILE_IMAGE} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Sarkar",
            url: WEBSITE_URL,
            image: PROFILE_IMAGE,
            jobTitle: "Software Engineer",
            description:
              "React and React Native Developer with experience building modern web and mobile applications.",

            sameAs: [
              "https://github.com/PankajSarkar-git",
              "https://www.linkedin.com/in/pankaj-sarkar-a6a28624a/",
            ],

            knowsAbout: [
              "Software Engineering",
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
              "Mobile App Development",
              "React",
              "React Native",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "Redux",
              "HTML",
              "CSS",
              "SCSS",
              "REST APIs",
              "Git",
              "Firebase",
            ],

            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      <Outlet />
    </div>
  );
};

export default App;
