import React, { Component } from "react";

class Input extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <input
        type="number"
        className="form-control"
        min="1"
        placeholder="Time (in Seconds)"
        onChange={e => handleChange(e)}
      />
    );
  }
}

export default Input;
