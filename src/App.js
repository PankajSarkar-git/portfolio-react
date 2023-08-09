import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import {  Outlet, createBrowserRouter } from "react-router-dom";
// import EducationExperiences from "./component/EducationExperiences";
import EducationExperiences from "./component/EducationExperiences";



const App = () => {
  return(
    <div className="main">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/About",
        element : <About/>
      },
      {
        path : "/EducationExperiences",
        element : <EducationExperiences/>
      },
      {
        path : "/contact",
        element : <Contact/>
      }
    ]
  }
])



export default App;
