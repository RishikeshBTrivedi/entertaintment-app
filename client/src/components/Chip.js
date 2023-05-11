import React from 'react'
import "./Chip.css"
function Chip(props) {
  return (
    <div>
        <label className="container">{props.label}
        <input type="checkbox"/>
        <span className="checkmark"></span>
        </label>
    </div>
  )
}

export default Chip