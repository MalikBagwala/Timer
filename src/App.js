import React, { Component } from "react";
import TimerMain from "./components/TimerMain";
// import Demo from "./components/demo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <TimerMain />
      </div>
    );
  }
}

export default App;
