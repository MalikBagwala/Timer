import React, { Component } from "react";
import Timer from "react-compound-timer";
class Demo extends Component {
  render() {
    return (
      <div>
        <Timer
          direction="backward"
          initialTime={this.state}
          startImmediately={false}
        >
          {this.handleTimer}
        </Timer>
      </div>
    );
  }
}

export default Demo;
