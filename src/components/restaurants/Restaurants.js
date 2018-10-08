import React, { Component } from "react";

import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;

    return (
      <ul>
        {restaurants.map(r => (
          <Restaurant
            key={r.id}
            restaurant={r}
            deleteRestaurant={deleteRestaurant}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
