import { Item } from "./Item";

import * as React from "react";

interface Props {
  todo: Item;
  toggleStatus: (e: Item) => void;
}

class Todo extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleStatus({
      id: this.props.todo.id,
      text: this.props.todo.text,
      status: "Done",
      completed: !this.props.todo.completed
    });
  }

  render() {
    const { todo }: Props = this.props;

    return (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={this.handleClick}
          readOnly={true}
        />
        <span className={todo.completed ? "complete" : ""}>{todo.text}</span>
      </div>
    );
  }
}

export default Todo;
