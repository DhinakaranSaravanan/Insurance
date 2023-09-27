import React from 'react'

const CreditCard = ({submitHandler, name, setName, number, setNumber, altNumber, setAltNumber, place, setPlace, district, setDistrict}) => {
  
  return (
    <div className='container'>
      <form className='CreditCard' onSubmit={submitHandler} >
          <input
            placeholder='Name'
            value={name}
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder='Mobile Number +91'
            type='number'
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            placeholder='Alternate Number +91'
            type='number'
            value={altNumber}
            required
            onChange={(e) => setAltNumber(e.target.value)}
          />
          <input
            placeholder='Place'
            type='text'
            value={place}
            required
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            placeholder='District'
            type='text'
            value={district}
            required
            onChange={(e) => setDistrict(e.target.value)}
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreditCard