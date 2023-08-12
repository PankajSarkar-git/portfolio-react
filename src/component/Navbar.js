import { useEffect, useState } from "react";
import "./componentStyle.css";
import { Menu , X} from "lucide-react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [mobileNav , setMobileNav] = useState(false);
  const navLinks = document.querySelectorAll('.nav-links').forEach((e)=>{
    e.addEventListener('click',()=>setMobileNav(false))
  })

  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  }
  return (
    <>
    {/* ================navBar================ */}
      <nav className="navbar top-nav">
      {/* ==================name================== */}
      <div className="nav-titel">
        <h2>Pankaj Sarkar</h2>
      </div>
        {/*============= nav Link=============  */}
        <ul className= {mobileNav ? "unOderList activeNav " : "unOderList"} >
          <li className="nav-links">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/About">About Me</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/EducationExperiences">Education</NavLink>{" "}
          </li>
          <li className="nav-links">
            <NavLink to="/Project">Project</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
        {/* ==========Mobile menu========== */}
        <div className="mobile" onClick={toggleMenu}>
        {mobileNav ? <X color='white'/> : <Menu color="white" />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
