import React, { Component } from "react";
import Timer from "./Timer";
class TimerMain extends Component {
  state = {
    time: 60000
  };

  changeTime = ({ target }) => {
    this.setState({ time: target.value });
  };
  render() {
    return <Timer initTime={this.state.time} onTimeChange={this.changeTime} />;
  }
}

export default TimerMain;
