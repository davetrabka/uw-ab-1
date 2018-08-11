import React from 'react';

const Feature = props => {
  const { icon, header, description } = props;
  return (
    <div className="col s6 m6 l3">
      <div className="icon-block">
        <h1 className="center teal-text lighten-text-1 icon">
          <i className={icon} />
        </h1>
        <h6 className="center grey-text icon-descr">{description}</h6>
        <h4 className="center teal-text">{header}</h4>
      </div>
    </div>
  );
};

export default Feature;
