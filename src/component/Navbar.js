import { useEffect, useState } from "react";
import "./componentStyle.css";
import { Menu, X } from "lucide-react";

const Navbar = ({ setShowComponent,showComponent }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const navLinks = document.querySelectorAll(".nav-links").forEach((e) => {
    e.addEventListener("click", () => {
      setMobileNav(false);
    });
  });

  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  };


  return (
    <>
      {/* ================navBar================ */}
      <nav className="navbar top-nav">
        {/* ==================name================== */}
        <div className="nav-titel" onClick={() => setShowComponent("home")}>
          <h2>Pankaj Sarkar</h2>
        </div>
        {/*============= nav Link=============  */}
        <ul className={mobileNav ? "unOderList activeNav " : "unOderList"}>
          <li onClick={() => setShowComponent("home")} className={showComponent=== "home" ? "active nav-links " : "mav-a nav-links"}>Home
          </li>
          <li  onClick={() => setShowComponent("about")} className={showComponent=== "about" ? "active nav-links" : "mav-a nav-links"}>About Me
          </li>
          <li  onClick={() => setShowComponent("education")} className={showComponent=== "education" ? "active nav-links" : "mav-a nav-links"}>Education
          </li>
          <li  onClick={() => setShowComponent("project")} className={showComponent=== "project" ? "active nav-links" : "mav-a nav-links"}>Project
          </li>
          <li  onClick={() => setShowComponent("contact")} className={showComponent=== "contact" ? "active nav-links" : "mav-a nav-links"}>Contact
          </li>
        </ul>
        {/* ==========Mobile menu========== */}
        <div className="mobile" onClick={toggleMenu}>
          {mobileNav ? <X color="white" /> : <Menu color="white" />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
