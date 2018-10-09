import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      let newRestaurant = {
        text: action.text,
        id: cuid(),
        reviews: []
      };
      return [...state.concat(newRestaurant)];
    case "ADD_REVIEW":
      return state.map(r => {
        if (r.id === action.payload.restaurantId) {
          return {
            ...r,
            reviews: [
              ...r.reviews,
              {
                text: action.payload.text,
                id: cuid(),
                restaurantId: action.payload.restaurantId
              }
            ]
          };
        } else return r;
      });
    case "DELETE_REVIEW":
      return state.map(rest => {
        if (rest.id === action.payload.restaurantId) {
          return {
            ...rest,
            reviews: rest.reviews.filter(
              review => review.id !== action.payload.reviewId
            )
          };
        }
      });
    case "DELETE_RESTAURANT":
      return state.filter(rest => rest.id !== action.restaurantId);
    default:
      return state;
  }
}
