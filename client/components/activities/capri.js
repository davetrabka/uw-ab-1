import React from 'react';

const IsleOfCapri = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/casino.jpeg"
        alt="Isle of Capri"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">Isle of Capri Casino</h5>
      <p id="activity-info">
        <a className="black-text" href="https://www.isleofcapriboonville.com/">
          Website{' '}
        </a>
        | 100 Isle Of Capri Blvd, Boonville, MO 65233 | 1-610-241-1625
      </p>
      <p className="activity-text">
        Feeling lucky? The Isle of Capri Casino offers table games, slot
        machines, video poker, giveaways, and more. They're open late during the
        week and 24 hours a day on the weekends. The casino is also home to
        three restaurants as well.{' '}
      </p>
      <p className="activity-text">
        From Cajun Stud to Criss Cross Poker, Isle of Capri offers over 20
        tables and more than 900 slot machines.
      </p>
      <p className="activity-text">
        The casino is just a short one-block walk away!
      </p>
    </div>
  </div>
);
export default IsleOfCapri;
