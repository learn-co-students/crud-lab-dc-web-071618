import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurant.reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </ul>
    );
  }
}

export default Reviews;
