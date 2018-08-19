import React from 'react';
import { Link } from 'react-router-dom';
import RatingTable from './rating-detail';

const RatingSummary = () => (
  <div className="parallax-container align-items-override">
    <div className="center container row">
      <h3 className="white-text">
        Overall Rating<br />
      </h3>
      <i className="fas fa-star star-icon" />
      <i className="fas fa-star star-icon" />
      <i className="fas fa-star star-icon" />
      <i className="fas fa-star star-icon" />
      <i className="fas fa-star star-icon" />
      <div id="divider-line" />
      <div className="row icons-container">
        <RatingTable />
      </div>
      <Link
        to="/reviews"
        className="btn-large waves-effect waves-light teal lighten-1">
        Detailed reviews
      </Link>
      <br />
    </div>
    <div className="parallax parallax-home" />
  </div>
);

export default RatingSummary;
