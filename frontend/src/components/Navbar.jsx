import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar(){
    return <nav className='navbar bg-dark container'>
        <h4><Link className='Link' to="/">Home</Link></h4>
        <h4><Link className='Link' to="/users">Users</Link></h4>
        <h4><Link className='Link' to="/create">Create User</Link></h4>
    </nav>

}

export default Navbar;