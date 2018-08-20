import React from 'react';

const MissouriRiver = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/mo-river.jpeg"
        alt="Missouri River"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">Missouri River</h5>
      <p id="activity-info">
        <a
          className="black-text"
          href="https://www.americanrivers.org/river/missouri-river/">
          Learn more here{' '}
        </a>
        | Open year-round
      </p>
      <p className="activity-text">
        The Missouri River is the perfect place to take in the scenic vistas
        first described by Lewis and Clark way back in 1805! The Missouri River
        was the major water route to the Rocky Mountain west from the time of
        Lewis and Clark until the arrival of the railroads in the late 1800's.
      </p>
      <p className="activity-text">
        In addition to its colorful history, the area offers hunting, fishing,
        and floating opportunities. A small visitor center at Fort Benton
        supplies historical and recreational information as well!
      </p>
    </div>
  </div>
);
export default MissouriRiver;
