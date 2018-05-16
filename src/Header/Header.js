import React from 'react'

const Header = ({ date }) => (
  <div className="Header">
    <h1>{ date.currentMonth }<span>{ date.year }</span></h1>
  </div>
)

export default Header
