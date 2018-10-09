import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../../actions";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addRestaurant(this.state.text, this.props.restaurant);

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        Add a restaurant
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch(addRestaurant(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RestaurantInput);
