import React from 'react';

const CarMuseum = () => (
  <div className="activity-block ">
    <div className="col l3 m12 s12">
      <img
        className="activity-picture"
        src="/img/car-museum.jpg"
        alt="Mitchell Car Museum"
      />
    </div>
    <div className="col l9 m12 s12">
      <h5 className="teal-text">Mitchell Antique Motorcar Museum</h5>
      <p id="activity-info">
        <a className="black-text" href="https://mitchellcarcollection.com/">
          Website{' '}
        </a>
        | 210 East Spring St, Boonville, MO 65233 | 660-882-3967
      </p>
      <p className="activity-text">
        Lewis Miller’s Mitchell Collection is one of the most extensive
        collections of Mitchell wagons, bicycles, motorcycles, and automobiles
        of the 19th and early 20th centuries. It's the perfect afternoon for car
        lovers of all ages!
      </p>
      <p className="activity-text">
        Lewis Miller is a direct descendent of the Mitchell and Lewis families
        and has one of the largest collections of the various products sold by
        the their respective companies, including The Mitchell Wagon Company,
        Wisconsin Wheel Works, and the Mitchell-Lewis Motor Company.
      </p>
      <p className="activity-text">
        Tours are open to the public, but by appointment only. Don't forget to
        call ahead at 1-660-882-3967.
      </p>
    </div>
  </div>
);
export default CarMuseum;
