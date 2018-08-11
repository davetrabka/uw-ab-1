import React from 'react';
import Splash from './splash';
import Description from './description';
import Booking from './booking';
import HomeDetails from './home-details';

const Landing = () => (
  <React.Fragment>
    <Splash />
    <Booking />
    <Description />
    <HomeDetails />
  </React.Fragment>
);

export default Landing;
