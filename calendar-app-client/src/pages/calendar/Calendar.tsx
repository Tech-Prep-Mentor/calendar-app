import React, {useState} from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import Task from './Task'; // Import your Task component here
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/Calendar.css';

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  title: string;
}

const MyCalendar: React.FC = () => {
  const [showTask, setShowTask] = useState(false);
  const events: MyEvent[] = [
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Sample Event',
    },
  ];
      
  const toggleTaskVisibility = () => {
    setShowTask(!showTask);
  };
  
  return (
    <div className="calendar-task-container">
      <div className={showTask ? "calendar-container" : "calendar-container full-width"}>
        <button onClick={toggleTaskVisibility} className="task-button">
          {showTask ? 'Hide Tasks' : 'Show Tasks'}
        </button>
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
    </div>
  );
};

export default MyCalendar;