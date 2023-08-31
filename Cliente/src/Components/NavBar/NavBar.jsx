import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="mainContainer">
        <NavLink to= '/home' >HOME</NavLink>
        <NavLink to= '/create' >FORM</NavLink>
    </div>
  )
}

export default NavBar;