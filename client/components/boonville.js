import React from 'react';
import WarmSprings from './activities/warm-springs';
import KatyTrail from './activities/katy-trail';
import MissouriRiver from './activities/mo-river';
import CarMuseum from './activities/car-museum';
import IsleOfCapri from './activities/capri';
import OtherActivities from './activities/more-activities';

const Boonville = () => (
  <React.Fragment>
    <div className="spacer" />
    <br />
    <div className="container activities-container">
      <img
        id="background-image"
        src="/img/hiking-woman.jpeg"
        alt="background image"
      />
      <React.Fragment>
        <div className="center row">
          <h4 className="teal-text">
            Booneville offers fun for the whole family! <br />
          </h4>
          <div id="divider-line" />
        </div>
        <div className="row">
          <WarmSprings />
          <br />
          <KatyTrail />
          <br />
          <MissouriRiver />
          <br />
          <CarMuseum />
          <br />
          <IsleOfCapri />
          <br />
          <OtherActivities />
          <br />
        </div>
      </React.Fragment>
    </div>
  </React.Fragment>
);
export default Boonville;
