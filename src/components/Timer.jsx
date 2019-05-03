import React, { Component } from "react";
import Timer from "react-compound-timer";
import Input from "./Input";
// import CountDown from "react-compound-timer";
class TimerMain extends Component {
  state = {
    timerText: "text-success"
  };
  // handleInput = ({ target }) => {
  //   this.setState({ time: target.value * 1000 });
  //   console.log(this.state.time);
  // };
  handleTimer = ({ start, stop, reset, timerState }) => (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className={"card-title " + this.state.timerText}>
          <Timer.Minutes /> : <Timer.Seconds /> : <Timer.Milliseconds />
        </h2>
        <h6 className="card-subtitle mb-2 text-warning">{timerState}</h6>
        <div className="form-group my-4">
          <Input handleChange={this.handleInput} />
        </div>
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-success" onClick={start}>
            <i className="fas fa-play" />
          </button>
          <button type="button" className="btn btn-danger" onClick={stop}>
            <i className="fas fa-stop" />
          </button>
          <button type="button" className="btn btn-primary" onClick={reset}>
            <i className="fas fa-redo-alt" />
          </button>
        </div>
      </div>
    </div>
  );
  handleReset = () => {
    console.log("hey");
    if (this.props.initTime > 50000) {
      console.log("hey");
      this.setState({ timerText: "text-success" });
    } else if (this.props.initTime > 40000) {
      this.setState({ timerText: "text-warning" });
    } else {
      console.log("hey");
      this.setState({ timerText: "text-danger" });
    }
  };
  render() {
    const { initTime } = this.props;
    return (
      <div className="main-timer">
        <Timer
          direction="backward"
          initialTime={initTime}
          onReset={this.handleReset}
          timeToUpdate={10}
          startImmediately={false}
          checkpoints={[
            {
              time: 10000,
              callback: () => {
                this.setState({ timerText: "text-danger" });
                console.log(this.state);
              }
            },
            {
              time: 50000,
              callback: () => {
                this.setState({ timerText: "text-warning" });
                console.log(this.state);
              }
            }
          ]}
        >
          {this.handleTimer}
        </Timer>
      </div>
    );
  }
}

export default TimerMain;
