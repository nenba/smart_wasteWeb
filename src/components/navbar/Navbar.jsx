import "./navbar.scss";
//import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  //const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <Link to="/">
      <div className="wastebin">
      <button onClick={() =>{}}>
        
        <p>WasteBin</p> 
        
        </button>
      </div>
      </Link>

      <Link to="/History">
      <div className="history">
      <button onClick={() =>{}}>
        <p>History</p>
        </button>
      </div>
      </Link>

      <Link to="/Employee">
      <div className="Employee">
      <button onClick={() =>{}}>
        <p>Employee</p>
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
