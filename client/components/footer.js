import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id="footer" className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l7 s12">
          <h5 className="grey-text text-lighten-4">
            From <span className="cursive-robert white-text"> Robert</span> ,
            Your Superhost:
          </h5>
          <p className="grey-text text-lighten-4">
            "I believe in traveling the world, meeting new people, and
            experiencing new cultures. Life is too short to put things off. My
            partner and I believe in good food, good friends, and fun
            adventures!
          </p>
          <p className="grey-text text-lighten-4">
            As a host, I want your experience to be special. The house is
            decorated for each season and holiday, and we encourage guests to
            "make it their own" during their stay. Questions? We'll try and find
            an answer! Requests? We love them! Don't ever be afraid to reach out
            - I am here to help!"
          </p>
        </div>
        <div className="col l1 s12" />
        <div className="col l2 s12">
          <h5 className="white-text">Go To:</h5>
          <ul>
            <li>
              <Link className="white-text" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/neighborhood">
                About Boonville
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/reviews">
                Our Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="col l2 s12">
          <h5 className="white-text">Find Us On:</h5>
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
      <div className="container space-between">
        <Link to="/login" className="white-text space-between">
          <i className="fas fa-unlock-alt lock-icon" />
          <p> Admin Access</p>
        </Link>
        <div>
          <i className="far fa-copyright " /> Copyright 2018
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
