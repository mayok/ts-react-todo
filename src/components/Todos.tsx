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
        {this.props.todos.map((todo: Item) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.completed}
            toggleStatus={this.props.toggleStatus}
          />
        ))}
      </div>
    );
  }
}
