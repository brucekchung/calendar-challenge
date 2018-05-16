import React, { Component } from 'react'
import Header from './Header'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    this.state = {
      currentMonth: '',
      year: ''
    }
  }
  
  componentDidMount() {
    const today = new Date() 
    const month = this.allMonths[today.getMonth()]
    const year = today.getFullYear()

    this.setState({ 
      currentMonth: month,
      year
    })
  }

  render() {
    return (
      <div className="App">
        <Header date={ this.state } />
        {console.log('month:', this.state.currentMonth)}
        {console.log('year:', this.state.year)}
      </div>
    )
  }
}

export default App
