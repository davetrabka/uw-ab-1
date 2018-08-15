import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from './components/landing';
import ReviewsList from './components/reviews-list';
import LogIn from './components/auth-form';
import UserDashboard from './components/user-dashboard/user-home';
import { me } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/reviews" component={ReviewsList} />
        <Route exact path="/login" component={LogIn} />
        {isLoggedIn && (
          <Switch>
            <Route path="/admin" component={UserDashboard} />
          </Switch>
        )}
        <Route component={Landing} />
      </Switch>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
