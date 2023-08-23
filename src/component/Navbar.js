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
          <li className="nav-links">
            <a   href="" onClick={() => setShowComponent("home")} className={showComponent=== "home" ? "active" : "mav-a"}>Home</a>
          </li>
          <li className="nav-links">
            <a href="#"  onClick={() => setShowComponent("about")} className={showComponent=== "about" ? "active" : "mav-a"}>About Me</a>
          </li>
          <li className="nav-links">
            <a href="#"  onClick={() => setShowComponent("education")} className={showComponent=== "education" ? "active" : "mav-a"}>Education</a>
          </li>
          <li className="nav-links">
            <a href="#"  onClick={() => setShowComponent("project")} className={showComponent=== "project" ? "active" : "mav-a"}>Project</a>
          </li>
          <li className="nav-links">
            <a href="#"  onClick={() => setShowComponent("contact")} className={showComponent=== "contact" ? "active" : "mav-a"}>Contact</a>
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
