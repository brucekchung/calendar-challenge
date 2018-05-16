import React, { Component } from 'react'
import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMonth: '',
      nextMonth: '',
      year: '',
      daysInCurrentMonth: '',
      daysInNextMonth: ''
    }
  }

  //months arg for Date is 1-indexed...
  daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  
  componentDidMount() {
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = new Date() 
    const monthNumber = today.getMonth()
    const currentMonth = allMonths[monthNumber]
    const nextMonth = allMonths[monthNumber + 1]
    const year = today.getFullYear()
    const daysInCurrentMonth = this.daysInMonth(year, monthNumber) 
    const daysInNextMonth = this.daysInMonth(year, monthNumber + 1)

    this.setState({ 
      currentMonth,
      nextMonth,
      year,
      daysInCurrentMonth,
      daysInNextMonth
    })
  }

  render() {
    return (
      <div className="App">
        {console.log('info: ', this.state)}
        <Header date={ this.state } />
        <Calendar />
      </div>
    )
  }
}

export default App
