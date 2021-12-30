import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='Navbar'>
            <Link className='link' to="/">Take me Home</Link>
        </div>
    )
}

export default NavBar
