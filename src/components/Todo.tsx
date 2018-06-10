import * as React from "react";

export interface Props {
  todo: string;
}

const Todo = ({ todo }: Props) => {
  return <div>{todo}</div>;
};

export default Todo;
