import React from 'react';
import Splash from './splash';
import Description from './description';
import Booking from './booking';
import HomeDetails from './home-details';
import RatingSummary from './rating-summary';

const Landing = () => (
  <React.Fragment>
    <Splash />
    <Booking />
    <Description />
    <HomeDetails />
    <RatingSummary />
  </React.Fragment>
);

export default Landing;
