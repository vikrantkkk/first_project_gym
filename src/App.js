import { NavLink } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <ul>

        <li> <NavLink to="/home" >home</NavLink> </li>
        <li> <NavLink to="/about" >about</NavLink> </li>
        <li><NavLink to="/classes" >classes</NavLink> </li>
        <li> <NavLink to="/blogs" >blogs</NavLink> </li>

      </ul>
    </>
  );
}

export default App;
