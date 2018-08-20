import axios from 'axios';
import history from '../history';

const GOT_REVIEWS = 'GOT_USER';
const CREATED_REVIEW = 'CREATED_REVIEW';

const initialState = {
  reviews: [],
};

const gotReviews = reviews => ({ type: GOT_REVIEWS, reviews });
const createdReview = review => ({ type: CREATED_REVIEW, review });

export const getReviews = () => async dispatch => {
  const { data } = await axios.get(`/api/reviews`);
  dispatch(gotReviews(data));
};

export const createReview = review => async dispatch => {
  const { data } = await axios.post(`/api/reviews`, review);
  dispatch(createdReview(data));
  history.push('/');
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    case CREATED_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.review],
      };
    default:
      return state;
  }
}
