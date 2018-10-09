import React, { Component } from "react";
import { connect } from "react-redux";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map(r => (
          <Restaurant restaurant={r} key={r.id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state
  };
};

export default connect(mapStateToProps)(Restaurants);
