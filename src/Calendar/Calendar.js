import React from 'react'
import Day from '../Day/Day'
import './Calendar.css'

const Calendar = ({ date }) => {
  const renderDays = () => {
    const allDays = []

    for(let i = 0; i < date.daysInCurrentMonth; i++) {
      allDays.push(<Day dayInMonth={ i + 1} key={i + date.currentMonth} />)
    }
    
    return allDays
  }

  return (
    <div className="Calendar">
      { renderDays() }
    </div>
  )
}

export default Calendar
