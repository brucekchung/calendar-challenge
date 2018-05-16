import React from 'react'
import Day from '../Day/Day'
import './Calendar.css'

const Calendar = ({ date, addEvent }) => {

  const eventOnDay = (month, day) => {
    return date.events.filter(event => {
      const eventStart = event.start.split('/')
      const eventEnd = event.end.split('/')
      const correctMonth = eventStart[0] - 1 === month ? true : false
      const correctDay = () => {
        if (eventStart[1] <= day && day <= eventEnd[1]) {
          return true
        } else {
          return false
        }
      }
       
      return correctMonth && correctDay()
    })
  }

  const renderDays = () => {
    const allDays = []

    for(let i = 0; i < date.firstDay; i++) {
      allDays.push(<div 
        className="placeholder" 
        key={ i + 'placeholder' }>
      </div>)
    }

    for(let i = 1; i <= date.daysInCurrentMonth; i++) {
      allDays.push(<Day 
        dayInMonth={ i } 
        month={ date.monthNumber }
        allEvents={ eventOnDay(date.monthNumber, i) }
        addEvent={ addEvent }
        key={ i + date.currentMonth } />)
    }

    for(let i = 1; i <= date.daysInNextMonth; i++) {
      allDays.push(<Day 
        dayInMonth={ i } 
        month={ date.monthNumber }
        allEvents={ eventOnDay(date.monthNumber + 1, i) }
        addEvent={ addEvent }
        key={ i + date.nextMonth } />)
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
