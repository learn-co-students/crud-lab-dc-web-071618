import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;

    return (
      <ul>
        {reviews.map(r => (
          <Review
            key={r.id}
            restaurantId={restaurantId}
            review={r}
            deleteReview={deleteReview}
          />
        ))}
      </ul>
    );
  }
}

export default Reviews;
