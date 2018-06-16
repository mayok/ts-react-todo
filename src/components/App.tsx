import { Item } from "./Item";

import * as React from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

import "../css/style.css";

interface State {
  todos: Item[];
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          text: "text",
          status: "Todo",
          completed: false
        }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  addTodo(e: Item) {
    this.setState({
      todos: [...this.state.todos, e]
    });
  }

  toggleStatus(e: Item) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, e.id),
        e,
        ...this.state.todos.slice(e.id + 1)
      ]
    });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}
