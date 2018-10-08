import React, { Component } from "react";

class Review extends Component {
  render() {
    const { review, restaurantId, deleteReview } = this.props;

    return (
      <div>
        <li>{review.text}</li>
        <button
          onClick={() => deleteReview({ reviewId: review.id, restaurantId })}
        >
          X
        </button>
      </div>
    );
  }
}

export default Review;
