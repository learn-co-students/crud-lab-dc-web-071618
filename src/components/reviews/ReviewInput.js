import React, { Component } from "react";

import { connect } from "react-redux";
import { addReview } from "../../actions";

class ReviewInput extends Component {
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
    this.props.addReview(this.state.text, this.props.restaurant.id);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        Add a review
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.text} onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, restaurantId) => dispatch(addReview(text, restaurantId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewInput);
