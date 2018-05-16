import React from 'react'
import './Day.css'

const Day = ({ dayInMonth, month, allEvents, addEvent }) => (
  <div className="Day" onDoubleClick={ () => addEvent(dayInMonth, month) }>
    <p>{ dayInMonth }</p> 
    {
      allEvents.length > 0 &&
        allEvents.map((event, i) => <h5 key={ i + 'event' }>{event.name}</h5>)
    }
  </div>
)

export default Day
