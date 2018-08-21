import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => (
  <div id="booking" className="container">
    <div className="booking-container">
      <br />
      <h6 className="teal-text">
        Our home is just steps from the Katy Trail, Missouri River,
        Entertainment and Depot District, casino, and downtown Boonville! Enjoy
        the beauty and peace of this historic town with the convenience of
        Columbia, MO only 18 miles away!
      </h6>
      <h6 className="teal-text">
        Visit the world-famous Anheuser-Busch Clydesdales at the Warm Springs
        Ranch, bike or hike the Katy Trail, visit a local winery or spend a day
        or two exploring the rich history of the area - it's a getaway that
        won't break the bank!
      </h6>
      <br />
      <br />
      <Link
        to="/neighborhood"
        className="btn-large waves-effect waves-light teal lighten-1">
        Explore our favorite activities
      </Link>
      <br />
    </div>
  </div>
);
export default Summary;
