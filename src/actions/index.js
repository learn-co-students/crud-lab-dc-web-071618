export function addRestaurant(text) {
  return {
    type: "ADD_RESTAURANT",
    text
  };
}

export function addReview(text, restaurantId) {
  return { type: "ADD_REVIEW", payload: { text, restaurantId } };
}

export function deleteReview(reviewId, restaurantId) {
  return {
    type: "DELETE_REVIEW",
    payload: { reviewId, restaurantId }
  };
}

export function deleteRestaurant(restaurantId) {
  return {
    type: "DELETE_RESTAURANT",
    restaurantId
  };
}
