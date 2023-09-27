import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';

const NavBars = () => {
  return (
    <div className='header'>
        <Header title = {"PEEJIYEM"}/>   
        <ul className='navBar'>          
            <li><Link to='/CreditCard' >CreditCard</Link></li>
            <li><Link to='/Insurance' >Insurance</Link></li>
            <li><Link to ='/Loans' >Loans</Link></li>
            <li><Link to ='/MicroSavings' >MicroSavings</Link></li>
            <li><Link to ='/RealEstate' >RealEstate</Link></li>
            <li><Link to ='/JobQueries' >JobQueries</Link></li>
            <li><Link to ='/SignUp' >SignUp</Link></li>
        </ul>
    </div>
  )
}

export default NavBars