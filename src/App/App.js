import React, { Component } from 'react'
import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'
import './App.css'
import { events } from '../mockEvents'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthNumber: '',
      currentMonth: '',
      nextMonth: '',
      year: '',
      daysInCurrentMonth: '',
      daysInNextMonth: '',
      firstDay: '',
      events: [] 
    }
  }

  componentDidMount() {
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date() 
    const monthNumber = today.getMonth()
    const currentMonth = allMonths[monthNumber]
    const nextMonth = allMonths[monthNumber + 1]
    const year = today.getFullYear()
    const daysInCurrentMonth = new Date(year, monthNumber + 1, 0).getDate()
    const daysInNextMonth = new Date(year, monthNumber + 2, 0).getDate()
    const firstDay = new Date(year, monthNumber, 1).getDay()

    this.setState({ 
      monthNumber,
      currentMonth,
      nextMonth,
      year,
      daysInCurrentMonth,
      daysInNextMonth,
      firstDay,
      events
    })
  }
  
  addEvent = (day, month) => {
    const name = prompt('Please enter the event name')
    const date = `${month + 1}/${day}/2018`
    const eventToAdd = { name, start: date, end: date } 

    this.setState({ events: [...this.state.events, eventToAdd] }) 
  }

  render() {
    return (
      <div className="App">
        <Header date={ this.state } />
        <Calendar date={ this.state } addEvent={ this.addEvent }/>
      </div>
    )
  }
}

export default App
