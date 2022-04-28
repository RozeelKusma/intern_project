import React from 'react'
import './project.css'


const Projects = () => {
  const box = [
    {
      title: 'Mental Health',
      time: '2019 - ongoing'
    },
    {
      title: 'Ganesh School',
      time: '2019 - ongoing'
    },
    {
      title: 'Health Post 1',
      time: '2019 - ongoing'
    },
    {
      title: 'Shape Talk',
      time: ''
    },
    {
      title: 'Earthquake Relief',
      time: ''
    },
    {
      title: 'Welness Weekend',
      time: ''
    },
    
  ]


  return (
    <div className='main_projects'>
      <div className="p_top">
        <div className="left_top_p">
          <h1 className='left_heading'> Awareness And Ownership of a Green City</h1>
          <p className='left_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem atque, veniam inventore incidunt molestias ab. Omnis voluptate, modi, harum soluta illum neque doloremque asperiores deleniti consectetur nostrum, qui minus reprehenderit earum. Cumque, atque reiciendis minus vero ad nesciunt ipsam! Id aliquid assumenda est blanditiis aut cum iste quod suscipit.</p>
        </div>
        <div className="right_top_i">
          <img className='right_i' src='https://dummyimage.com/600x400/000/fff' alt='600X400'/>
        </div>
      </div>
      
    </div>
  )
}

export default Projects