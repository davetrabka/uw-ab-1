import React from 'react';
import Feature from './feature';

const HomeDetails = () => (
  <div className="container">
    <div className="section">
      <br />
      <div className="row icons-container">
        <Feature icon="fas fa-users" description="Sleeps" header="10" />
        <Feature icon="fas fa-home" description="Bedrooms" header="3" />
        <Feature icon="fas fa-bed" description="Beds" header="4" />
        <Feature icon="fas fa-bath" description="Bathrooms" header="2.5" />
      </div>
      <br />
      <br />
    </div>
  </div>
);

export default HomeDetails;
