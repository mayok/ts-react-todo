import * as React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Item } from "./Item";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

import "../css/style.css";

interface monitorItem {
  id: number;
}

interface State {
  todos: Item[];
}

class App extends React.Component<{}, State> {
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
    this.move = this.move.bind(this);
  }

  addTodo(e: Item) {
    this.setState({
      todos: [...this.state.todos, e]
    });
  }

  move(item: monitorItem & Object, status: string) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, item.id),
        Object.assign({}, this.state.todos[item.id], { status: status }),
        ...this.state.todos.slice(item.id + 1)
      ]
    });
  }

  render() {
    return (
      <div className="board">
        <TodoForm addTodo={this.addTodo} />
        {["Todo", "Doing", "Done"].map((status: string) => (
          <Todos
            key={status}
            name={status}
            todos={this.state.todos.filter(
              (todo: Item) => todo.status === status
            )}
            move={this.move}
          />
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
