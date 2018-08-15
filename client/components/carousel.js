import React, { Component } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

class ReviewCarousel extends Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container">
        <div className="parallax parallax-carousel">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={5}
          />
        </div>
      </div>
    );
  }
}

export default ReviewCarousel;
