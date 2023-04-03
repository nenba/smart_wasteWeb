import Navbar from "../../components/navbar/Navbar";
import React, { useState } from 'react';
import "./report.scss";

const Report = () => {
  const [weeklyVolume, setWeeklyVolume] = useState("");
  const [weeklyWeight, setWeeklyWeight] = useState("");
  const [weeklyDate, setWeeklyDate] = useState("");
  const [monthlyVolume, setMonthlyVolume] = useState("");
  const [monthlyWeight, setMonthlyWeight] = useState("");

  const handleWeeklyVolumeChange = (e) => {
    setWeeklyVolume(e.target.value);
  }

  const handleWeeklyWeightChange = (e) => {
    setWeeklyWeight(e.target.value);
  }

  const handleWeeklyDateChange = (e) => {
    setWeeklyDate(e.target.value);
  }

  const handleMonthlyVolumeChange = (e) => {
    setMonthlyVolume(e.target.value);
  }

  const handleMonthlyWeightChange = (e) => {
    setMonthlyWeight(e.target.value);
  }

  return (
    <>
    <Navbar />
    <div className="report">
      <div className="weekly-report">
        <h2>Weekly Report</h2>
        <input
          type="text"
          placeholder="Weekly Volume"
          value={weeklyVolume}
          onChange={handleWeeklyVolumeChange}
        />
        <input
          type="text"
          placeholder="Weekly Weight"
          value={weeklyWeight}
          onChange={handleWeeklyWeightChange}
        />
        <input
          type="text"
          placeholder="Date"
          value={weeklyDate}
          onChange={handleWeeklyDateChange}
        />
      </div>
      <div className="monthly-report">
        <h2>Monthly Report</h2>
        <input
          type="text"
          placeholder="Monthly Volume"
          value={monthlyVolume}
          onChange={handleMonthlyVolumeChange}
        />
        <input
          type="text"
          placeholder="Monthly Weight"
          value={monthlyWeight}
          onChange={handleMonthlyWeightChange}
        />
      </div>
    </div>
    </>
  );
};

export default Report;
