import React from 'react';

const WarmSprings = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/clydesdale.jpg"
        alt="Warm Springs Ranch"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">
        Warm Springs Ranch - Home of the Budweiser Clydesdales
      </h5>
      <p id="activity-info">
        <a className="black-text" href="https://www.warmspringsranch.com/">
          {' '}
          Website
        </a>{' '}
        | 25270 State Highway 98, Boonville, MO 65233 | 1-888-972-5933
      </p>
      <p className="activity-text">
        Warm Springs Ranch is home to the world-famous Budweiser Clydesdales.
        With 300-plus acres of land and more than 100 Clydesdales, it is the
        perfect place to spend an afternoon in beautiful Cooper County,
        Missouri.{' '}
      </p>
      <p className="activity-text">
        Guided tours are available daily and last 1.5 hours. Group tours can
        accommodate up to 60 guests and each one includes a meet-and-greet with
        the Clydesdales, a stop at the Clydesdale Gift Shop, and more!
      </p>
      <p className="activity-text">
        The ranch is open to the public, but we recommend calling ahead to
        guarantee your spots on the tour.
      </p>
    </div>
  </div>
);
export default WarmSprings;
