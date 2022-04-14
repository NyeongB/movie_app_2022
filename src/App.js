import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  clickPlus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  clickMinus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.clickPlus}>Plus</button>
        <button onClick={this.clickMinus}>Minus</button>
      </div>
    );
  }
}

export default App;
