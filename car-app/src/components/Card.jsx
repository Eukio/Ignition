import React from 'react';
import ReactCarousel from 'react-bootstrap/Carousel';
import corolla from '../assets/corolla.png';

function Card() {
    return (
        <ReactCarousel.Item>
        <img src={corolla} text="First slide" />
        <ReactCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </ReactCarousel.Caption>
      </ReactCarousel.Item>
    );
}

export default Card;
//import '../styles/Card.css';
