import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LenyImage1 from '../../assets/images/Lenyim1.png';
import './style.css';
 
  
const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt='Leny'
      height='400px'
      src={LenyImage1} // use normal <img> attributes as props
      width='400pxx' 
      effect="blur"
      
      />
    <LazyLoadImage
      className='image'
      alt='Leny'
      height='400px'
      src={LenyImage1} // use normal <img> attributes as props
      width='400pxx' 
      effect="blur"
      
      />
  </div>
);
 
export default MyImage;
