import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return(
    <>
      <nav className="nav">
        <div className="nav-item"><Link to="/">. . /</Link></div>
        <div className="nav-item"><a href="#products">/ Products</a></div>
        {/* <div className="nav-item"><a href="#interests">/Interests</a></div> */}
        <div className="nav-item"><a href="#contact">/ Contact</a></div>
      </nav>
    </>
  )
}

export default Nav;