import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteReview } from "../../actions";

class Review extends Component {
  render() {
    const { review } = this.props;

    return (
      <div>
        <li>{review.text}</li>
        <button
          onClick={() =>
            this.props.deleteReview(review.id, review.restaurantId)
          }
        >
          {" "}
          X{" "}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: (reviewId, restaurantId) =>
      dispatch(deleteReview(reviewId, restaurantId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Review);
