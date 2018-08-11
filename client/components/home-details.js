import React from 'react';
import Feature from './feature';

const HomeDetails = () => (
  <div className="container">
    <div className="section">
      <div className="row icons-container">
        <Feature icon="fas fa-users" description="Sleeps" header="10" />
        <Feature icon="fas fa-bed" description="Bedrooms" header="3" />
        <Feature icon="fas fa-bath" description="Bathrooms" header="2.5" />
        <Feature icon="fas fa-moon" description="Min Nights" header="2" />
      </div>
    </div>
  </div>
);

export default HomeDetails;
