import React from 'react'
import { Link } from 'react-router-dom'
///stateless functional components are functions that taking proertis information
//// and returns jsx element
///// stateless componenets can't access this
////// local methods need to be put in own functions like calcGoalProgress() and percentToDecimal
export const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/" activeclassname="selected">Home </Link></li>
            <li><Link to="/Profile" activeclassname="selected">Profile </Link></li>
            <li><Link to="/Admin" activeclassname="selected"> Admin </Link></li>
        </ul>
    </nav>
)
export default Navbar