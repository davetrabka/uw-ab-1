import React from 'react';
import zenscroll from 'zenscroll';

const scroll = () => {
  const offset = screen.availHeight / 2.6;
  const target = document.getElementById('booking');
  const chevron = document.getElementById('chevron');

  zenscroll.setup(null, offset);
  zenscroll.to(target);
  chevron.style.visibility = 'hidden';
};

const Splash = () => (
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br />
        <h1 className="header center">
          Welcome to our{' '}
          <span className="home-font teal-text text-lighten-2"> home</span>.
        </h1>
        <div className="row center">
          <h5 className="header col s12 light">
            Located in the heart of beautiful and historic Boonville, MO
          </h5>
        </div>
        <div className="row center">
          <a
            href="https://www.airbnb.com/rooms/7664188?location=Boonville%2C%20MO%2C%20United%20States&adults=1&children=0&infants=0&s=gejNTM4w"
            className="btn-large waves-effect waves-light teal lighten-1">
            Book your stay today!
          </a>
        </div>
      </div>
    </div>
    <a id="chevron" href="#" onClick={scroll}>
      <i className="fas fa-angle-down" />
    </a>
    <div className="parallax parallax-splash" />
  </div>
);

export default Splash;
