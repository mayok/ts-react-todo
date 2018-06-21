import { Item } from "./Item";

import * as React from "react";

interface Props {
  addTodo: (e: Item) => void;
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

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo() {
    this.props.addTodo({
      id: this.state.count,
      text: this.state.input,
      status: "Todo",
      completed: false
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
      <div className="textbox">
        <input
          type="text"
          placeholder="things what should I do"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.addTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default TodoForm;
