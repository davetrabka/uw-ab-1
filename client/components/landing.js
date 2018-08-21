import React from 'react';
import Splash from './splash';
import Description from './description';
import Summary from './summary';
import HomeDetails from './home-details';
import RatingSummary from './rating-summary';

const Landing = () => (
  <React.Fragment>
    <Splash />
    <Summary />
    <Description />
    <HomeDetails />
    <RatingSummary />
  </React.Fragment>
);

export default Landing;
