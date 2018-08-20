import React from 'react';

const KatyTrail = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/katy-trail.jpeg"
        alt="Katy Trail"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">Katy Trail State Park</h5>
      <p id="activity-info">
        <a
          className="black-text"
          href="https://mostateparks.com/park/katy-trail-state-park">
          Website{' '}
        </a>
        | Open daily from sunrise to sunset
      </p>
      <p className="activity-text">
        Whether you're interested in biking, walking, or horseback riding – or
        just a nature lover or history buff – the Katy Trail is always a great
        option. Part of the trail is an official segment of the Lewis and Clark
        National Historic Trail.
      </p>
      <p className="activity-text">
        The newly designated Depot District is right at the end of the road. Be
        sure to check out the wonderful museum highlighting the importance of
        the Katy Railroad to the area, as well as information about how the area
        came to be. Then take a stroll across the newly restored Katy Railroad
        Bridge and find yourself in the middle of the Missouri River with
        spectacular views all around you!
      </p>
      <p className="activity-text">
        Harley Park and "Lookout Point" – just 2 blocks away – are must-sees as
        well!
      </p>
    </div>
  </div>
);
export default KatyTrail;
