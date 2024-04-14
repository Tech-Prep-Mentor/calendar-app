import React, { useState } from 'react';
import "../styles/EventForm.css";
const EventForm = () => {
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [eventDetails, setEventDetails] = useState({
    dueDate: '',
    class: '',
    startDate: '',
    endDate: '',
  });

  const handleEventChange = (field) => (e) => {
    if (field === 'class') {
      setEventDetails({ ...eventDetails, [field]: e.target.checked });
    } else {
      setEventDetails({ ...eventDetails, [field]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add more
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <button onClick={() => setEventType('Assignment')}>Assignment</button>
        <button onClick={() => setEventType('Exam')}>Exam</button>
        <button onClick={() => setEventType('Event')}>Event</button>
        <button onClick={() => setEventType('Task')}>Task</button>
        <button onClick={() => setEventType('Reminder')}>Reminder</button>
      </div>
      <label htmlFor="description">Description</label>
      <textarea
        placeholder="Add description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {eventType === 'Assignment' && (
        <>
        <label htmlFor="Due Date">Due Date</label>
          <input
            type="date"
            placeholder="Due Date"
            value={eventDetails.dueDate}
            onChange={handleEventChange('dueDate')}
          />
          <label>
            Classes
            <input
              type="checkbox"
              checked={eventDetails.class}
              onChange={handleEventChange('class')}
            />
          </label>
        </>
      )}
      {eventType === 'Exam' && (
        <>
          <input
            type="date"
            placeholder="Date"
            value={eventDetails.startDate}
            onChange={handleEventChange('startDate')}
          />
          <label>
            Class:
            <input
              type="checkbox"
              checked={eventDetails.class}
              onChange={handleEventChange('class')}
            />
          </label>
        </>
      )}
      {eventType === 'Event' && (
        <>
          <input
            type="date"
            placeholder="Start Date"
            value={eventDetails.startDate}
            onChange={handleEventChange('startDate')}
          />
          <input
            type="date"
            placeholder="End Date"
            value={eventDetails.endDate}
            onChange={handleEventChange('endDate')}
          />
        </>
      )}
      {eventType === 'Task' && (
        <input
          type="date"
          placeholder="Date"
          value={eventDetails.startDate}
          onChange={handleEventChange('startDate')}
        />
      )}
      {eventType === 'Reminder' && (
        <input
          type="date"
          placeholder="Date"
          value={eventDetails.startDate}
          onChange={handleEventChange('startDate')}
        />
      )}
      <button>Save</button>
    </form>
  );
};

export default EventForm;
