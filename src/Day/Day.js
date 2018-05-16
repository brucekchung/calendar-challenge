import React from 'react'
import './Day.css'

const Day = ({ dayInMonth, allEvents }) => (
  <div className="Day">
    <p>{ dayInMonth }</p> 
    {
      allEvents.length > 0 &&
      allEvents.map(event => <h5>{event.name}</h5>)
    }
  </div>
)

export default Day
