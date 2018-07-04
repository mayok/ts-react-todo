import { AddTodoProps } from "./Interfaces";

import * as React from "react";

interface Props {
  addTodo: (e: AddTodoProps) => void;
}

interface State {
  input: string;
  warn: string;
}

class TodoForm extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      input: "",
      warn: "nowarn"
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo() {
    if (this.state.input.length > 0) {
      this.props.addTodo({
        text: this.state.input,
        status: "Todo"
      });
      this.setState({
        input: ""
      });
    } else {
      this.setState({
        warn: "warn"
      });
      window.setTimeout(() => {
        this.setState({ warn: "nowarn" });
      }, 1300);
    }
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
        <button className="btn" type="button" onClick={this.addTodo}>
          Add
        </button>
        <p className={this.state.warn}>empty is not allowed</p>
      </div>
    );
  }
}

export default TodoForm;
