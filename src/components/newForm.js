import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import './task.css'

const NewForm = (props) => {
  const [ profile, setProfile ] = useState({prenom: ""})

  const handleChange = (e) => {

    const name = e.target.name
    const value = e.target.value

    setProfile((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <div className="container">
      <p>My {props.name} form !</p>
      <form>
        <label htmlFor="name">Prénom</label>
        <input id="name" type="text" name="prenom" value={profile.prenom || ""} onChange={handleChange}/>
        <label htmlFor="Age">Age</label>
        <input id="Age" type="text" name="age" value={profile.age || ""} onChange={handleChange} />
      </form>
      <ul>
        {Object.keys(profile).map((key) => {
          return <li key={key}>{key}: {profile[key]}</li>
        })}
      </ul>
    </div>
  )

}

NewForm.propTypes = {
  name: PropTypes.string.isRequired
}

export default NewForm;
