import * as React from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: Todo) {
    this.setState({
      todos: [...this.state.todos, e]
    });
  }

  render() {
    return (
      <div>
        <TodoForm handleClick={this.handleClick} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
