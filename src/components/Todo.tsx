import * as React from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  id: number;
  text: string;
  status: boolean;
  toggleStatus: (e: Item) => void;
}

class Todo extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleStatus({
      id: this.props.id,
      text: this.props.text,
      completed: !this.props.status
    });
  }

  render() {
    const { text, status }: Props = this.props;

    return (
      <div>
        <input
          type="checkbox"
          checked={status}
          onClick={this.handleClick}
          readOnly={true}
        />
        <span className={status ? "complete" : ""}>{text}</span>
      </div>
    );
  }
}

export default Todo;
