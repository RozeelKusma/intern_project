import React from 'react'
import './nav.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {Link } from 'react-router-dom'

const Nav = () => {
    
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src='' alt='Logo'/>
        </div>
        <div className="nav-bar">
           <div className='list'><Link to='/' className='links'>Home</Link></div>
           <div className="dropdown">
                <button className="dropbtn list"><Link to='/about_us' className='links'>About <MdOutlineArrowDropDown/></Link></button>
                <div className="dropdown-content">
                <Link to='/about_us' className='links'>About Us</Link>
                <Link to='/alumini' className='links'>Alumini</Link>
                    
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn list"><Link to='/projects' className='links'>Projects</Link></button>
                <div className="dropdown-content">
                <Link to='/projects' className='links'>Project Details</Link>
                <Link to='/impacts' className='links'>Impact Details</Link>
                </div>
            </div>
           <div className='list'><Link to='/contact' className='links'> Contact Us</Link></div>
           <div className="dropdown">
                <button className="dropbtn list join">Join Us <MdOutlineArrowDropDown/></button>
                <div className="dropdown-content">
                <Link to='/shaper' className='links'>Become a Shaper</Link>
                <Link to='/sponsor' className='links'>Become a Sponsor</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Nav