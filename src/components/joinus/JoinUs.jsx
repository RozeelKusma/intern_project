import React from 'react'
import './joinus.css'
import {AiFillFacebook, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {BsGlobe2} from 'react-icons/bs'
import Footer from './../bottom container/Footer'

const JoinUs = () => {
  return (
    <div>
      <div className='shaper_main'>
      <div className="shaper_title">
        <h1 className='title_h'>Global Shapers Kathmandu Hub 2021</h1>
      </div>
      <div className="shaper_para">
        <p className="paragraph">The Global Shapers Community is a network of city-based Hubs developed and led by young leaders who want to develop their leadership potential towards serving society. To that end, Hubs undertake local projects to improve their communities. The Global Shapers Community is one of several multi-stakeholder communities at the World Economic Forum. Meet some of the Global Shapers at <a href= 'https://www.youtube.com/watch?v=S_TCp_GcO34' target='blank' className='youtube'>Youtube</a>.</p>
        <p className='paragraph'>Through the Global Shapers Community, Shapers are provided with opportunities to connect with the worldwide network of Global Shapers, to network with other World Economic Forum communities, and to represent the voice of youth at World Economic Forum events. Today, there are 444 Hubs across 147 countries with more than 10632 Shapers doing work that is changing and shaping their communities in important, impactful ways.</p>
        <p className='paragraph'>The Global Shapers Community Kathmandu is a registered not for profit organization. The Kathmandu Hub has around 30 members presently that have expertise ranging from banking and entrepreneurship to social activism, and journalism. Using their diverse backgrounds and expertise, the Shapers are committed to making a strong social impact in their community through their projects and initiatives.</p>
        <p className="fol">Follow Global Shapers Kathmandu Hub</p>
        <div className="icons_follow">
          <AiFillFacebook size={20} className='s_i'/>
          <AiOutlineInstagram size={20} className='s_i'/>
          <BsGlobe2 size={20} className='s_i'/>
          <AiFillLinkedin size={20} className='s_i'/>
        </div>
      </div>
      <div className="cards_main">
        <div className="card1">
          <h5 className='heading_card'>ELIGIBILITY:</h5>
          <hr></hr>
          <p className='c1_t'>
            You are eligible to apply to Kathmandu Shapers if:
            </p>
            <ul className='list_shaper'>
              <li>You are between 18-27 years old; align with the missions of the larger Global Shapers Community.</li>
              <li>Residents of or live close to the hub city, Kathmandu</li>
              <li>Committed to working to improve our community.</li>
              <li>Interested in developing your leadership potential.</li>
              <li>Work well in teams and are collaborative in spirit.</li>
              <li>Selections are usually restricted to one Shaper from a single organization and/or family.</li>
            </ul>



        </div>
        <div className="card1">
          <h5 className='heading_card'>ADDITIONAL REQUIREMENTS:</h5>
          <hr></hr>
          <p className='c1_t'>
            Should you be selected as Kathmandu Shapers, please note:
            </p>
            <ul className='list_shaper'>
              <li>All freshmen Shapers will go through a probation period.</li>
              <li>You significantly contribute to a project to completion in their freshman year in order to remain a Shaper in 2021-2022.</li>
              <li>You will be required to complete a new member survey after their selection to confirm their acceptance.</li>
              <li>All Kathmandu Shapers are required to attend an annual retreat every year.</li>
              <li>Shapers are invited and highly encouraged to join the SHAPE events and apply for WEF events (selection based).</li>
              <li>Review and accept our Hub Charter and pledge right after probation period is over</li>
              <li>Submit annual membership fee before joining & annually in every year.</li>
            </ul>
        </div>
        <div className="card1">
          <h5 className='heading_card'>APPLICATION PROCESS AND TIMELINE:</h5>
          <hr></hr>
            <ul className='list_shaper'>
              <li className='round'>Round 1:</li>
          
            <p>Online Application (5-17 September 2021) Please complete the application before 17 September, 2021 After reviewing the application, we will invite finalists to join an interview (We will most probably do a virtual meet)</p>
         
              <li className='round'>Round 2:</li>
            <p >
            Interview - Finalists from Round 1 will be invited to join a virtual interview where members from the leadership team and advisory council will set up a virtual interaction with you to know you better.
            </p>
            </ul>



        </div>
      </div>
      <div className="shaper_form">
        <h5 className="title_for">Form Fill Up</h5>
        <hr />
        <p className="c1_t">Global Shapers Kathmandu Hub reserves the right to reject application at any point without an explanation.
</p>
        <form className='s_form'>
                <div className="upper_form">
               <div className='u_f'>
               <label htmlFor="Full Name">Full Name <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Name'/>
               </div>
               <div className='u_f'>
               <label htmlFor="DOB">Date of Birth <sup style={{color:"red"}}>*</sup></label>
                <input type="date" id='DOB'/>
               </div>
                <div className='u_f'>
                <label htmlFor="Email">Email <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Email'/>
                </div>
                <div className='u_f'>
                <label htmlFor="Phone">Phone Number <sup style={{color:"red"}}>*</sup></label>
                <input type="number" id='Phone'/>
                </div>
                </div>
                <label htmlFor="Link">Link to your social media profile <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Link'/>
                <label htmlFor="employed">If you are currently employed, please state the name of your org <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='employed'/>
                <label htmlFor="expertise">What is your subject area of expertise? (Eg: Media, Education, Health, Finance, Business etc.)<sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='expertise'/>
                <label htmlFor="skills">List out your three best skills (seperated by , ) <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='skills'/>
                <label htmlFor="knowing">How did you get to know about Global Shapers Kathmandu Hub? (Mention the name of the person, if any) <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='knowing'/>
                <label htmlFor="involve">Have you been involved in other group/communities? Have you led or have been a part of any initiative through the group? Share your experience (150 words or less)* <sup style={{color:"red"}}>*</sup></label>
                <textarea name="involve" id="involve" rows="5" style={{color:"grey"}}>Your Experience</textarea>
                <label htmlFor="join">Why do you want to join our community? (100 words or less) <sup style={{color:"red"}}>*</sup></label>
                <textarea name="join" id="join" rows="5" style={{color:"grey"}}>Your Cause</textarea>
                <label htmlFor="impact">Global Shapers are supposed to run social impact projects in their respective cities. If you had had the chance to lead a project what would it be and why? (100 words or less) <sup style={{color:"red"}}>*</sup></label>
                <textarea name="impact" id="impact"  rows="5" style={{color:"grey"}}>Your Thoughts</textarea>
                <label htmlFor="hours">If selected, how many hours per week will you be able to commit to hub activities?<sup style={{color:"red"}}>*</sup></label>
                <select name="hours" id="hours" style={{height:"45px"}}>
                <option value="1">1-5</option>
                <option value="6">6-10</option>
                <option value="11">11-15</option>
                <option value="15">15+</option>
                </select>
                <label htmlFor="cv">Please upload your updated CV here <sup style={{color:"red"}}>*</sup></label>
                <input type="file" id="myFile"/>
                <div className='t_b'><button className='submit_btn'>Submit Form</button></div>
        </form>

      </div>
      
    </div>
    <Footer/>
    </div>
  )
}

export default JoinUs