import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        text: action.text,
        id: cuid(),
        reviews: []
      };

      return {
        restaurants: [...state.restaurants, restaurant]
      };

    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(r => r.id !== action.restaurantId)
      };

    case "ADD_REVIEW":
      const review = {
        text: action.text,
        id: cuid(),
        restaurantId: action.restaurantId
      };

      return {
        restaurants: state.restaurants.map(r => {
          return r.id === action.restaurantId
            ? {
                ...r,
                reviews: [...r.reviews, review]
              }
            : r;
        })
      };

    case "DELETE_REVIEW":
      return {
        restaurants: state.restaurants.map(r => {
          if (r.id === action.restaurantId) {
            return {
              ...r,
              reviews: r.reviews.filter(rev => {
                return rev.id !== action.reviewId;
              })
            };
          } else {
            return r;
          }
        })
      };

    default:
      return state;
  }
}
