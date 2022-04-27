import { Carousel } from 'react-bootstrap';
import {FiPlay} from 'react-icons/fi';
import './carousel.css';
import image1 from './../../assets/images/1.jpeg';
import image2 from './../../assets/images/2.jpg';



const CarouselContainer = () => {
  
  return (
    <div className='carousel'>
          <Carousel interval={5000}>
      <Carousel.Item>
       <div className=' image_div'></div>
        <img
          className="d-block w-100 image"
          src={image1}
          alt="First slide"
        />     
        <Carousel.Caption className='caption'>
          <p>We are here to help all of us</p>
          <h1>Some Title Here</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard
dummy text ever since.</p>
          <button className='button buttons'>Discover More</button>
          <button className='button buttons'>
            <FiPlay /> Play Video
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' image_div'></div>

        <img
          className="d-block w-100 image"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption className='caption'>
          <div >
          <p>Let's grow together</p>
          <h1>Some Title Here</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className='button buttons'>Discover More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </div>
    
  )
}

export default CarouselContainer;