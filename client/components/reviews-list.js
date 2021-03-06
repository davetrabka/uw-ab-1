import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from './review-card';
import { me, getReviews } from '../store';

class ReviewsList extends Component {
  state = { loading: true };

  componentDidMount = () => {
    this.props.loadInitialData();
    this.props.getReviews();
    this.setState({ loading: false });
  };

  render() {
    const orderedReviews = this.props.reviews.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return (
      <div className="container reviews-container">
        <img
          id="background-image"
          src="/img/river.jpeg"
          alt="background image"
        />
        {this.state.loading ? (
          <div id="loading">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-white-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="center row container">
              <br />
              <h3 className="smithsonian teal-text shadow-text">
                Dedicated to giving you a 5-star stay! <br />
              </h3>
              <i className="fas fa-star star-icon teal-text shadow-text" />
              <i className="fas fa-star star-icon teal-text shadow-text" />
              <i className="fas fa-star star-icon teal-text shadow-text" />
              <i className="fas fa-star star-icon teal-text shadow-text" />
              <i className="fas fa-star star-icon teal-text shadow-text" />
              <div id="divider-line" />
            </div>
            <div className="row reviews-container">
              {orderedReviews.map(review => (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  date={review.date}
                  review={review.review}
                />
              ))}
            </div>
          </React.Fragment>
        )}
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
  getReviews: () => dispatch(getReviews()),
});

export default connect(mapState, mapDispatch)(ReviewsList);
