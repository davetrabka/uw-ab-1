import React, { Component } from 'react';
import { connect } from 'react-redux';
import { me } from '../store';

class NewReview extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col m6 s6">
          <div className="card-panel">
            <h5 className="teal-text">Add Review</h5>
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
                <div className="input-field col s12">
                  <textarea id="review" type="textarea" />
                  <label name="review" htmlFor="review">
                    Review Text
                  </label>
                </div>
              </div>
              <div>
                <button className="waves-effect waves-light btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
});

export default connect(null, mapDispatch)(NewReview);
