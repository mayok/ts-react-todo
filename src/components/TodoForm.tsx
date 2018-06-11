import * as React from "react";

interface Todo {
  id: number;
  text: string;
}

interface Props {
  handleClick: (e: Todo) => void;
}

interface State {
  count: number;
  input: string;
}

class TodoForm extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 1,
      input: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.handleClick({
      id: this.state.count,
      text: this.state.input
    });

    this.setState({
      input: "",
      count: this.state.count + 1
    });
  }

  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      input: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="things what should I do"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoForm;
