import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from './review-card';
import { me, getReviews } from '../store';

class ReviewsList extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.loadInitialData();
    this.props.getReviews();
    this.setState({ loading: false });
  }

  render() {
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
          <>
            <div className="center row container">
              <br />
              <h3 className="smithsonian black-text">
                88 Airbnb Reviews & Counting!
                <br />
              </h3>
              <i className="fas fa-star star-icon" />
              <i className="fas fa-star star-icon" />
              <i className="fas fa-star star-icon" />
              <i className="fas fa-star star-icon" />
              <i className="fas fa-star star-icon" />
              <div id="divider-line" />
            </div>
            <div className="row reviews-container">
              {this.props.reviews.map(review => (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  date={review.date}
                  review={review.review}
                />
              ))}
            </div>
          </>
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
