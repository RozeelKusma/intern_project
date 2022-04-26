import React from 'react'
import './nav.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'

const Nav = () => {
  return (
    <div className='main-nav'>
        <div className="logo">
            <img src='' alt='Logo'/>
        </div>
        <div className="nav-bar">
           <div className='list'>Home</div>
           <div className="dropdown">
                <button className="dropbtn list">About <MdOutlineArrowDropDown/></button>
                <div className="dropdown-content">
                    <a href="/">About Us</a>
                    <a href="/">Alumini</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn list">Projects</button>
                <div className="dropdown-content">
                    <a href="/">Project Details</a>
                    <a href="/">Impact Details</a>
                </div>
            </div>
           <div className='list'>Contact Us</div>
           <div className="dropdown">
                <button className="dropbtn list join">Join Us <MdOutlineArrowDropDown/></button>
                <div className="dropdown-content">
                    <a href="/">Become a Shaper</a>
                    <a href="/">Become a Sponsor</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Nav