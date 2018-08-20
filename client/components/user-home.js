import React, { Component } from 'react';
import { connect } from 'react-redux';
import { me, createReview } from '../store';

class UserDashboard extends Component {
  componentDidMount = () => {
    this.props.loadInitialData();
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const author = evt.target.author.value;
    const date = evt.target.date.value;
    const review = evt.target.review.value;
    this.props.createReview({ author, date, review });
  };

  render() {
    return (
      <div className="container dashboard-container">
        <img
          id="background-image"
          src="/img/outside-home-front.jpg"
          alt="background image"
        />
        <div className="row ">
          <div className="col offset-l2 l8 s12">
            <div className="card-panel">
              <h5 className="teal-text">Add A Review</h5>
              <form onSubmit={this.handleSubmit}>
                <div className="input-field col s12">
                  <input id="author" type="text" />
                  <label name="author" htmlFor="author">
                    Author Name
                  </label>
                </div>
                <div className="input-field col s12">
                  <input id="date" type="text" />
                  <label name="date" htmlFor="date">
                    Date (format: Month YYYY)
                  </label>
                </div>
                <div className="input-field col s12 ">
                  <textarea id="review" className="materialize-textarea" />
                  <label name="review" htmlFor="review">
                    Review Detail
                  </label>
                </div>
                <div>
                  <button
                    className="waves-effect waves-light btn"
                    type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  reviews: state.review.reviews,
});

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  createReview: review => dispatch(createReview(review)),
});

export default connect(mapState, mapDispatch)(UserDashboard);
