import { Item } from "./Item";

import * as React from "react";
import Todo from "./Todo";

interface Props {
  todos: Item[];
  toggleStatus: (e: Item) => void;
}

export default class Todos extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="todo">
          {this.props.todos
            .filter((todo: Item) => todo.status === "Todo")
            .map((todo: Item) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleStatus={this.props.toggleStatus}
              />
            ))}
        </div>
        <div className="Doing">
          {this.props.todos
            .filter((todo: Item) => todo.status === "Doing")
            .map((todo: Item) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleStatus={this.props.toggleStatus}
              />
            ))}
        </div>
        <div className="Done">
          {this.props.todos
            .filter((todo: Item) => todo.status === "Done")
            .map((todo: Item) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleStatus={this.props.toggleStatus}
              />
            ))}
        </div>
      </div>
    );
  }
}
