import React from 'react'
import {AiOutlineFacebook, AiOutlineTwitter,AiOutlineLinkedin,AiOutlineGoogle} from 'react-icons/ai'
import './footer.css';
import {BsDot} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer_main">
        <div className="bottom_container">
            <div className="left_container">
              <div className="logos">
                <img src="" alt="Logo" className="logo1"/>
              </div>
              <div className="description_bottom">
                <p className="dep">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>
            <div className="center_container">
              <div className='list_bottom'>
                  <div className='list_div'><BsDot/><h6 className='list_items'>HOME</h6></div>
                  <div className='list_div'><BsDot/><h6 className='list_items'>PAST PROJECTS</h6></div>
                  <div className='list_div'><BsDot/><h6 className='list_items'>PUBLICATIONS</h6></div>
                  <div className='list_div'><BsDot/><h6 className='list_items'>IMPACT</h6></div>
                  <div className='list_div'><BsDot/><h6 className='list_items'>OUR BLOG</h6></div>
                  <div className='list_div'><BsDot/><h6 className='list_items'>OUR NEWS</h6></div>

              </div>
            </div>
            <div className="right_container">
              <div className="follow">
                <h4>Follow Us</h4>
              </div>
              <div className='icon_container'>
                  <AiOutlineFacebook size={30} className='icons_bottom' />
                  <AiOutlineTwitter size={30} className='icons_bottom' />
                  <AiOutlineLinkedin size={30} className='icons_bottom'/>
                  <AiOutlineGoogle size={30} className='icons_bottom'/>
              </div>
            </div>
         </div>
            <div className="footer">
           Design and Developed by OutofBoxDesign
         </div>
    </div>
  )
}

export default Footer