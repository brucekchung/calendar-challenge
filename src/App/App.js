import React, { Component } from 'react'
import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'
import './App.css'
import { events } from '../mockEvents'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMonth: '',
      nextMonth: '',
      year: '',
      daysInCurrentMonth: '',
      daysInNextMonth: '',
      firstDay: '',
      events: ''
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
      currentMonth,
      nextMonth,
      year,
      daysInCurrentMonth,
      daysInNextMonth,
      firstDay,
      events
    })
  }

  render() {
    return (
      <div className="App">
        {console.log('info: ', this.state)}
        <Header date={ this.state } />
        <Calendar date={ this.state } />
      </div>
    )
  }
}

export default App
