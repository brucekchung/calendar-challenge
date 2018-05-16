import React from 'react'
import Day from '../Day/Day'
import './Calendar.css'

const Calendar = ({ date }) => {

  const eventOnDay = (month, day) => {
    // console.log('events: ', date.events)

    const matches = date.events.filter(event => {
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

    // console.log('matches: ', matches)
    return matches
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
        allEvents={ eventOnDay(date.monthNumber, i) }
        key={ i + date.currentMonth } />)
    }

    for(let i = 1; i <= date.daysInNextMonth; i++) {
      allDays.push(<Day 
        dayInMonth={ i } 
        allEvents={ eventOnDay(date.monthNumber + 1, i) }
        key={ i + date.nextMonth } />)
    }

    // eventOnDay(date.monthNumber, 19)
    return allDays
  }

  return (
    <div className="Calendar">
      { renderDays() }
    </div>
  )
}

export default Calendar
