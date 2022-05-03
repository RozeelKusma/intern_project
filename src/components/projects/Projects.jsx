import React from 'react';
import { useState } from 'react';
import './project.css';
import ReactPaginate from 'react-paginate';
import Footer from './../bottom container/Footer'

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const box = [
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Mental Health',
      time: '2019 - ongoing'
    },
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Ganesh School',
      time: '2019 - ongoing'
    },
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Health Post 1',
      time: '2019 - ongoing'
    },
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Shape Talk',
      time: ''
    },
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Earthquake Relief',
      time: ''
    },
    {
      img: "https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title: 'Welness Weekend',
      time: ''
    },
    {
      img:"https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title:"Digital Terai",
      time: ''
  },
  {
      img:"https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title:"Koteshwor",
      time: ''
  },
  {
      img:"https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title:"Devistan",
      time: ''
  },
  {
      img:"https://dummyimage.com/450x300/000/fff/&text=Dummy+Project+Pictures",
      title:"hwllo world",
      time: ''
  },
  ]
  const displayUsers = box.slice(pagesVisited,pagesVisited + usersPerPage )
  .map((b,index)=> (
    <div className="p_box">
      <div className="p_box_imgs">

      <img src={b.img} alt="dummy_image" className="p_box_img" />
      </div>
      <p className="p_box_title">{b.title}</p>
      <p className="p_box_time">{b.time}</p>
    </div>

  ));

  const pageCount = Math.ceil(box.length / usersPerPage);
  const changePage = ({selected}) => {
      setPageNumber(selected);
  }


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
      <div className="p_mid">
        <div className="nop">
          <h1 className='nop_title'>Number of Projects</h1>
        </div>
        <div className="p_boxes">

            {displayUsers}
        </div>
           
           
            <ReactPaginate
            nextLabel="next >"
            onPageChange={changePage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />

        </div>
          <Footer/> 
        
      
      
    </div>
  )
}

export default Projects