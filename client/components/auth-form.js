import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';

class LogIn extends Component {
  render() {
    const { name, handleSubmit, error } = this.props;
    return (
      <div id="loading" className="row container login-card-container">
        <img
          id="background-image"
          src="/img/outside-home-front.jpg"
          alt="background image"
        />
        <div className="col m4 offset-m5 s12">
          <div className="card-panel">
            <form onSubmit={handleSubmit} name={name}>
              <div className="input-field col s12">
                <input id="email" type="text" />
                <label name="email" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-field col s12">
                <input id="password" type="text" />
                <label name="password" htmlFor="password">
                  Password
                </label>
              </div>
              <div>
                <button className="waves-effect waves-light btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        </div>
        <div className="parallax parallax-hike" />
      </div>
    );
  }
}

const mapState = state => {
  return {
    name: 'login',
    displayName: 'Log In',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const formName = evt.target.name;
      dispatch(auth(email, password, formName));
    },
  };
};

export default connect(mapState, mapDispatch)(LogIn);

LogIn.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
