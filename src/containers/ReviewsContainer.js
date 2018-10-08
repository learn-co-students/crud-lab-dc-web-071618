import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    const { addReview, restaurant, deleteReview } = this.props;

    return (
      <div>
        <ReviewInput addReview={addReview} />
        <Reviews
          reviews={restaurant.reviews}
          restaurantId={restaurant.id}
          deleteReview={deleteReview}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addReview: text =>
      dispatch({
        type: "ADD_REVIEW",
        restaurantId: ownProps.restaurant.id,
        text
      }),
    deleteReview: ({ reviewId, restaurantId }) =>
      dispatch({
        type: "DELETE_REVIEW",
        restaurantId,
        reviewId
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewsContainer);
