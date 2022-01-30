import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/' className='active'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/new' className='active'>
            New Tweet
          </Link>
        </li>
      </ul>
    </nav>
  )
}
