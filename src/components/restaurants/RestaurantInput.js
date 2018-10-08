import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = text => this.setState({ text });

  handleSubmit = e => {
    const { addRestaurant } = this.props;

    e.preventDefault();
    addRestaurant(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleChange(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
