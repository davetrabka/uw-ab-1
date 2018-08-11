import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id="footer" className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About Your Hosts</h5>
          <p className="grey-text text-lighten-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="col l2 s12" />
        <div className="col l2 s12">
          <h5 className="white-text">Go To:</h5>
          <ul>
            <li>
              <Link className="white-text" to="/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/directions">
                Directions
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/neighborhood">
                About Boonville
              </Link>
            </li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h5 className="white-text">Bookings:</h5>
          <ul>
            <li>
              <a
                className="white-text"
                href="https://www.airbnb.com/rooms/7664188?location=Boonville%2C%20MO%2C%20United%20States&adults=1&children=0&infants=0&s=gejNTM4w">
                Airbnb
              </a>
            </li>
            <li>
              <a
                className="white-text"
                href="https://www.homeaway.com/vacation-rental/p763624vb">
                HomeAway
              </a>
            </li>
            <li>
              <a className="white-text" href="https://www.vrbo.com/763624">
                VRBO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <i className="far fa-copyright " /> Copyright 2018 | Built by{' '}
        <a
          className="white-text cursive"
          href="http://davidtrabka.com"
          target="_blank"
          rel="noopener noreferrer">
          Dave Trabka
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
