import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './history.scss';
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const events = [
    {
      id: 1,
      title: 'Event 1',
      start: new Date(2023, 1, 20),
      end: new Date(2023, 1, 22),
    },
    {
      id: 2,
      title: 'Event 2',
      start: new Date(2023, 1, 23),
      end: new Date(2023, 1, 25),
    },
  ];
  
  const localizer = momentLocalizer(moment);
  
  const MyCalendar = () => (
    <div>
    <Navbar />
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '70vh' }}
      />
    </div>
    </div>
  );
  
  export default MyCalendar;
  