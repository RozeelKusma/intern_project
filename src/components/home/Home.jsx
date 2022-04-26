import React from 'react'
import './home.css';
import {BsChatSquareQuote, BsPlay} from 'react-icons/bs'

import CarouselContainer from './CarouselContainer';

const Home = () => {
  const data=[
    {
      img: "https://dummyimage.com/70/000/fff",
      title: "Education & Employment",
      description: "Duis autem vel eum iriure dolor in hendrerit in vul esse molestie consequat vel illum."
    },
    {
      img: "https://dummyimage.com/70/000/fff",
      title: "Equity & Inclusion",
      description: "Duis autem vel eum iriure dolor in hendrerit in vul esse molestie consequat vel illum."
    },
    {
      img: "https://dummyimage.com/70/000/fff",
      title: "Climate & Environment",
      description: "Duis autem vel eum iriure dolor in hendrerit in vul esse molestie consequat vel illum."
    },
  ];
  const data2 = [
    {
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tempora, voluptatum officia iure reiciendis odio cumque! Reprehenderit tenetur blanditiis quisquam! Laboriosam ipsum mollitia ratione deserunt provident fugit blanditiis nam velit.",
      name: "Gerina pic",
      job: "Web Designer"
    },
    {
      desc: "Kathmandu Hub continues to be a shining example of what can be achieved when a small group of committed people come together to change their communities. In spite of insurmountable odds, Kathmandu Hub has shown the value of community, dedication, and teamwork to make a real difference.",
      name: "Ravi Kaneriya",
      job: "(Former) Head of Asis, Social Engagement Team, World Economic Forum",
    },
    {
      desc: "Direct Relief is honored to be able to work alongside Nepali organizations such as Global Shapers Kathmandu, with the shared goal of strengthening the healthcare system throughout Nepal. We hope to continue to support the Chunikhel clinic for many years to come.",
      name: "Daniel Hovey",
      job: "Emergency Response Specialist, Direct Relief",
    }

  ]
    
  return (
    <div className="main-home">
        <CarouselContainer/>
        <div className="home-desc">
          <div className='dumm'>
          <img className='dumm_img' src='https://dummyimage.com/550x400/000/fff' alt='dummyimage'/>
          </div>
          <div className="dumm_description">
            <div className="top_cont">
            <div className='line'>
            </div>
            <div><h2 className='title'>Every Day Brings New Challenges</h2>
            </div>
            </div>
            <h1 className='slogan'>Company's Slogan goes here</h1>
            <p className='company_desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
        <div className="features">
          <div className="f1">
            <h2>Our Features</h2>
          </div>
          <div className="box">
          {
            data.map((user, index)=>(
              <div className="boxes" key={index}>
                <img className='img70' src={user.img} alt="70X70"/>
                <h4 className='box_title'>{user.title}</h4>
                <p className='box_desc'>{user.description}</p>
              </div>
            ))
          }
          </div>
          <div className="quotes">
            {
              data2.map((users, index)=>(
                <div className="quote_box" key={index}>
                  <BsChatSquareQuote size={50}/>
                  <p className='qd'>{users.desc}</p>
                  <h3 className='qn'>{users.name}</h3>
                  <p className='qj'>{users.job}</p>

                </div>
              ))
            }
          </div>
          </div>
        
         <div className="play">
            <button className='play_btn'><BsPlay size={25}/></button>
            <h5 className='title1'>CREATE YOUR OWN EXPERIENCE</h5>
            <h2 className='title2'>How Do we Help You To Grow?</h2>
            <p className='para'>There are many variations of passages of Lorem Ipsum available, but the majortiy have suffered alteration in some form.</p>
          
         </div>
    </div>
        
        
        
        

    
  )
}

export default Home