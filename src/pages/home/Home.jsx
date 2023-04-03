import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Link } from "react-router-dom";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const Home = () => {
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
         <Navbar />
        <h1>WELCOME!</h1>
        <Link to="/Report">
        <div className="binOne">
          <div className="binText">
          <p>Bin #1</p>
          </div>
          <div className="binImage">
          <img src={require("./images/bin1-1.jpg")}  alt=" " style={{width: "150px" , height: "150px"}}/>
          </div>
          <button className="binButton" onClick={() =>{}}>Weekly/Monthly report</button>
          
        </div>
        </Link>
        <Link to="/Report">
        <div className="binTwo">
        <div className="binText">
          <p>Bin #2</p>
          </div>
          <div className="binImage">
          <img src={require("./images/bin1-1.jpg")}  alt=" " style={{width: "150px" , height: "150px", margin: "20px 0"}}/>
          </div>
          <button className="binButton" onClick={() =>{}}>Weekly/Monthly report</button>
        </div>
        </Link>
        <Link to="/Report">
        <div className="binThree">
        <div className="binText">
          <p>Bin #3</p>
          </div>
          <div className="binImage">
          <img src={require("./images/bin1-1.jpg")}  alt=" " style={{width: "150px" , height: "150px", margin: "20px 0"}}/>
          </div>
          <button className="binButton" onClick={() =>{}}>Weekly/Monthly report</button>
        </div>
        </Link>
        </div>
      </div>
    
  );
};

export default Home;
