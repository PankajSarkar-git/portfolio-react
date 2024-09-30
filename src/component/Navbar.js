import { useEffect, useState } from "react";
import "./componentStyle.css";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
          <NavLink to={"/"} className=" nav-links ">
            Home
          </NavLink>
          <NavLink to={"/about"} className=" nav-links ">
            About Me
          </NavLink>
          <NavLink to={"/education"} className=" nav-links ">
            Education & Experience
          </NavLink>
          <NavLink to={"/project"} className=" nav-links ">
            Project
          </NavLink>
          <NavLink to={"/contact"} className=" nav-links ">
            Contact
          </NavLink>
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
