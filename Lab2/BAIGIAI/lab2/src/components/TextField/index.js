import React from 'react'
import './styles.css'

export default function TextField() {
  return (
    <div className="text-field">
        <input type="text" placeholder="Enter your task here ..." />
        {/* <p className="text-error">Please fill in the task !</p> */}
    </div>
  )
}
