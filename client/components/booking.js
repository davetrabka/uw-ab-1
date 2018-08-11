import React from 'react';

const Booking = () => (
  <div id="booking" className="container">
    <h4 className="teal-text find-us center">You can find us on</h4>
    <div id="divider-line" />
    <div className="booking-container">
      <a
        href="https://www.airbnb.com/rooms/7664188?location=Boonville%2C%20MO%2C%20United%20States&adults=1&children=0&infants=0&s=gejNTM4w"
        className="col s12 m12 l4">
        <img id="logo" src="/img/airbnb-logo.png" alt="Airbnb Logo" />
      </a>
      <a
        href="https://www.homeaway.com/vacation-rental/p763624vb"
        className="col s12 m12 l4">
        <img id="logo" src="/img/homeaway-logo.png" alt="HomeAway Logo" />
      </a>
      <a href="https://www.vrbo.com/763624" className="col s12 m12 l4">
        <img id="logo" src="/img/vrbo-logo.png" alt="VRBO Logo" />
      </a>
    </div>
  </div>
);
export default Booking;
