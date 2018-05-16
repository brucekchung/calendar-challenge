import React from 'react'
import Day from '../Day/Day'
import './Calendar.css'

const Calendar = ({ date }) => {

  const renderDays = () => {
    const allDays = []

    for(let i = 0; i < date.firstDay; i++) {
      allDays.push(<div className="placeholder" key={ i + 'placeholder' }></div>)
    }

    for(let i = 1; i <= date.daysInCurrentMonth; i++) {
      allDays.push(<Day dayInMonth={ i } key={ i + date.currentMonth } />)
    }

    for(let i = 1; i <= date.daysInNextMonth; i++) {
      allDays.push(<Day dayInMonth={ i } key={ i + date.nextMonth } />)
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
