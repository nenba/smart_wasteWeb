import "./employee.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
//import { auth, db, storage } from "../../firebase";
import {ref,push,child,update} from "firebase/database";
import {database} from '../../firebase'
import { Link } from "react-router-dom";


const Employee = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [binLocation, setBinLocation] = useState("");
  const [binNumber, setBinNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleBinLocationChange = (event) => {
    setBinLocation(event.target.value);
  };

  const handleBinNumberChange = (event) => {
    setBinNumber(event.target.value);
  };

  const handleSubmit  = () => {
    console.log(name, number, binLocation, binNumber);
    let obj = {
        EmployeeName:name,
        EmployeeNumber:number,
        BinLocation:binLocation,
        BinNumber:binNumber,
        
    };       
const newPostKey = push(child(ref(database), 'posts')).key;
const updates = {};
updates['/' + newPostKey] = obj
return update(ref(database), updates);

};
  

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className="employee">
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="number">Employee Number:</label>
          <input type="text" id="number" value={number} onChange={handleNumberChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Bin Location:</label>
          <input type="text" id="location" value={binLocation} onChange={handleBinLocationChange} />
        </div>
        <div className="form-group">
          <label htmlFor="binNumber">Bin Number:</label>
          <input type="text" id="binNumber" value={binNumber} onChange={handleBinNumberChange} />
        </div>
        <div className="form-group">
  <button type="submit">Submit</button>
      </div>
      <div className="form-group">
        <Link to="/">
        <button type ="back">Home</button>
        </Link>
        </div>
      </div>
      </form>
      <Sidebar />
    </>
  );
};

export default Employee;
