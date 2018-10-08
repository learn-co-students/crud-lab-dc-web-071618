import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: "ADD_REVIEW", review: review }),
    deleteReview: reviewId =>
      dispatch({ type: "DELETE_REVIEW", reviewId: reviewId })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
