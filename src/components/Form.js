import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


const Form = () => {

  const [ profile, setProfile ] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    setProfile((prev) => {
      return {...prev, [name]: value }
    })
  }

  return (
    <div style={{marginTop: 40}}>
      <h1>My React form</h1>
      <div>
        <label htmlFor="prenom"> Prénom</label>
        <input type="text" id="prenom" name="prenom" onChange={handleChange} value={profile.prenom || ''}/>
      </div>
      <div>
        <label htmlFor="nom"> Nom</label>
        <input type="text" id="nom" name="nom" onChange={handleChange} value={profile.nom || ''}/>
      </div>
      <div>
        <label htmlFor="newsletter"> Newsletter</label>
        <input type="checkbox" id="newsletter" name="neswletter" onChange={handleChange} value={profile.newsletter || ''}/>
      </div>

      <ul style={{marginTop: 20}}>
        {Object.keys(profile).map((key) => {
          return <li key={key}><strong>{key}:</strong> {profile[key] === true || false ? String(profile[key]) : profile[key]}</li>
        })}
      </ul>
    </div>
  )

}

export default Form;
