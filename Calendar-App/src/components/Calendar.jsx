import React, { useState } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const events = [
  {
    title: 'Event 1',
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  },
  {
    title: 'Event 2',
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  }
];

const MyCalendar = () => {
  return (
    <div>
      <BigCalendar
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '500px' }}
      />
    </div>
  );
};

export default MyCalendar;
