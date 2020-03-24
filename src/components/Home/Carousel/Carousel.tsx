import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselHome extends React.Component {
  render() {
    return (
      <Carousel showThumbs={false}>
        <div>
          <img src="https://webcomicms.net/sites/default/files/clipart/147651/cartoon-desert-background-147651-1788949.jpg" alt="img1" />
          <p className="legend">Lorem ipsum dolor sis amet 1</p>
        </div>
        <div>
          <img src="https://webcomicms.net/sites/default/files/clipart/147651/cartoon-desert-background-147651-1788949.jpg"  alt="img2"/>
          <p className="legend">Lorem ipsum dolor sis amet 2</p>
        </div>
        <div>
          <img src="https://webcomicms.net/sites/default/files/clipart/147651/cartoon-desert-background-147651-1788949.jpg" alt="img3" />
          <p className="legend">Lorem ipsum dolor sis amet 3</p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselHome;
