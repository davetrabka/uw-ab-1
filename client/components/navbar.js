import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, me } from '../store';

class Navbar extends Component {
  componentDidMount = () => {
    this.props.loadInitialData();
  };

  render() {
    return (
      <nav role="navigation">
        <div className="nav-wrapper">
          <Link to="/">
            <i id="home-icon" className="fas fa-home" /> Home
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/neighborhood" className="white-text">
                About Boonville
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="white-text">
                Our Reviews
              </Link>
            </li>
            {this.props.isLoggedIn ? (
              <li>
                <Link
                  to="#"
                  className="logout waves-effect waves-light white teal-text btn-small"
                  onClick={this.props.handleLogout}>
                  Log Out
                </Link>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapState = state => ({
  userId: state.user.id,
  isLoggedIn: !!state.user.id,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  handleLogout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Navbar);
