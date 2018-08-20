import React from 'react';

const OtherActivities = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/boonville-downtown.jpeg"
        alt="Isle of Capri"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">Downtown Boonville & more...</h5>
      <p id="activity-info">
        <a className="black-text" href="https://goboonville.com/">
          Boonville City Website{' '}
        </a>
      </p>
      <p className="activity-text">
        Downtown Boonville and the various shops are a must do. If you love
        antiques then you will be in heaven! The Palance at he corner of Morgan
        & Main serves up some of the best food in town and is always hopping on
        the weekends!
      </p>
      <p className="activity-text">
        Boonville is a walkable town - I encourage you to do so! I-70 is the
        main road that runs through Boonville as well as the historic remnants
        of Route 66. Downtown is just 1/3rd of a mile away!
      </p>
    </div>
  </div>
);
export default OtherActivities;
