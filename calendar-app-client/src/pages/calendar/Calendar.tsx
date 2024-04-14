import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import EventForm from '../../components/EventForm';
import Task from './Task';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/Calendar.css';

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  title: string;
}

const MyCalendar: React.FC = () => {
  const [showTask, setShowTask] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false); 
  const events: MyEvent[] = [
    {
      title: "After DST",
      start: new Date("2024-04-13T09:00:00"),
      end: new Date("2024-04-13T10:00:00")
    },
    {
      title: "Lunch Meeting",
      start: new Date("2024-04-13T12:00:00"),
      end: new Date("2024-04-13T13:00:00")
    },
    {
      title: "Project Review",
      start: new Date("2024-04-13T15:00:00"),
      end: new Date("2024-04-13T16:30:00")
    }
  ];

  const toggleTaskVisibility = () => {
    setShowTask(!showTask);
  };


  const handleCreateEvent = () => {
    setShowEventForm(true); // Show the EventForm
  };

  
  return (
    <div className="calendar-task-container">
      <div className={showTask ? "calendar-container" : "calendar-container full-width"}>
        <div className='button-group'>
          <button onClick={handleCreateEvent} className="create-button">Create</button>       
          <button onClick={toggleTaskVisibility} className="task-button">
            {showTask ? 'Hide Tasks' : 'Show Tasks'}
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['day', 'week', 'month']}
          style={{ height: '100%' }}
        />
      </div>
      {showTask && (
        <div className="task-container">
          <Task />
        </div>
      )}
      {showEventForm && (
        <div className="eventform-container">
          <EventForm/>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
