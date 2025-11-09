import ReactCarousel from 'react-bootstrap/Carousel';
import corolla from '../assets/corolla.png';
function Carousel() {
  return (
    <ReactCarousel>

      <ReactCarousel.Item>
        
        <img src={corolla}  text="Second slide" />
        <ReactCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ReactCarousel.Caption>
      </ReactCarousel.Item>
      <ReactCarousel.Item>
        <img src={corolla} text="Third slide" />
        <ReactCarousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </ReactCarousel.Caption>
      </ReactCarousel.Item>

    </ReactCarousel>
  );
}

export default Carousel;