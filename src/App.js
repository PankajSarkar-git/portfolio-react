import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import {  Outlet, createBrowserRouter } from "react-router-dom";



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
      }
    ]
  }
])



export default App;
