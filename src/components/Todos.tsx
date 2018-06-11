import * as React from "react";
import Todo from "./Todo";

interface Todo {
  id: number;
  text: string;
}

interface Props {
  todos: Todo[];
}

export default class Todos extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo: Todo) => (
          <Todo key={todo.id} todo={todo.text} />
        ))}
      </div>
    );
  }
}
