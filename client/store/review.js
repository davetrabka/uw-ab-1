import axios from 'axios';

const GOT_REVIEWS = 'GOT_USER';
const CREATED_REVIEW = 'CREATED_REVIEW';
const DELETED_REVIEW = 'DELETED_REVIEW';

const initialState = {
  reviews: [],
};

const gotReviews = reviews => ({ type: GOT_REVIEWS, reviews });
const createdReview = () => ({ type: CREATED_REVIEW });
const deletedReview = () => ({ type: DELETED_REVIEW });

export const getReviews = () => async dispatch => {
  const { data } = await axios.get(`/api/reviews`);
  dispatch(gotReviews(data));
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    default:
      return state;
  }
}
