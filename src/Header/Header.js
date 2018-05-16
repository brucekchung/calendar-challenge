import React from 'react'
import './Header.css'

const Header = ({ date }) => {
  const allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayHeader = () => allDays.map(day => <li>{ day }</li>)

  return (
    <div className="Header">
      <h1>{ date.currentMonth }<span>{ date.year }</span></h1>
      <ul>{ dayHeader() }</ul>
    </div>
  )
}

export default Header
