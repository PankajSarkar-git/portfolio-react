import { useState } from "react";
import "./componentStyle.css";
import { Menu , X} from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [mobileNav , setMobileNav] = useState(false);


  const toggleMenu = () => {
    setMobileNav(!mobileNav);
  }
  return (
    <>
    {/* ================navBar================ */}
      <nav className="navbar">
      {/* ==================name================== */}
        <h2>Pankaj Sarkar</h2>
        {/*============= nav Link=============  */}
        <ul className= {mobileNav ? "unOderList activeNav " : "unOderList"} >
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/About">About Me</Link>
          </li>
          <li className="nav-links">
            <Link to="/Education & Experiences">Education & Experiences</Link>{" "}
          </li>
          <li className="nav-links">
            <Link to="/Project">Project</Link>
          </li>
          <li className="nav-links">
            <Link to="/Contact">Contact</Link>
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
