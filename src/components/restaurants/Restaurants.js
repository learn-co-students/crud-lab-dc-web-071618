import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        Restaurants Component
        {this.props.restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={this.props.deleteRestaurant}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
