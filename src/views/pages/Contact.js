import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <hr />
      <p style={{ marginTop: "150vh" }}>
        <Link to="/">Go to homepage</Link>
      </p>
    </div>
  )
}

export default Contact
