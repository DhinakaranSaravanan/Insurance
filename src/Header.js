import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <h1 className='logo'><Link to='/' >{title}</Link></h1>
  )
}

export default Header