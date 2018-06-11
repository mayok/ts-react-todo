import * as React from "react";
import Todos from "./Todos";
// import Button from "./Button";
// import Counter from "./Counter";

interface Todo {
  id: number;
  text: string;
}

interface State {
  todos: Todo[];
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          text: "text"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
