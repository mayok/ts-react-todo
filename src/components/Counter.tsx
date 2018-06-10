import * as React from "react";
import Button from "./Button";

interface State {
  count: number;
}

class Counter extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Button text="-" handleClick={this.decrement} />
        <span>{this.state.count}</span>
        <Button text="+" handleClick={this.increment} />
      </div>
    );
  }
}

export default Counter;
