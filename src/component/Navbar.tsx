import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="rightnav">
        <span className='logo'>Car store</span>
      </div>

      <div className="leftnav">
        <ul className='nav-content'>
            <li><Link href="/" className='navlink'>Toyota</Link></li>
            <li><Link href="/Tesla" className='navlink'>Tesla</Link></li>
            <li><Link href="/Honda" className='navlink'>Honda</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
