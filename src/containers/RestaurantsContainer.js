import React, { Component } from "react";
import { connect } from "react-redux";

import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";

class RestaurantsContainer extends Component {
  render() {
    const { restaurants, addRestaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text =>
      dispatch({
        type: "ADD_RESTAURANT",
        text
      }),
    deleteRestaurant: restaurantId =>
      dispatch({
        type: "DELETE_RESTAURANT",
        restaurantId
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
