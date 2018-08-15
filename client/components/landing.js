import React from 'react';
import Splash from './splash';
import Description from './description';
import Booking from './booking';
import HomeDetails from './home-details';
import ReviewCarousel from './carousel';

const Landing = () => (
  <React.Fragment>
    <Splash />
    <Booking />
    <Description />
    <HomeDetails />
    <ReviewCarousel />
  </React.Fragment>
);

export default Landing;
