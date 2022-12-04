import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NavUser.scss';

const NavUser = () => {
  return (
    <div className='nav-user'>
        <Link to="/users">
            <img className='users' src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt='users'/>
        </Link>
    </div>
  )
}

export default NavUser