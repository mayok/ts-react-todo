import { Item } from "./Item";

import * as React from "react";
import Todo from "./Todo";

interface Props {
  todos: Item[];
  toggleStatus: (e: Item) => void;
}

const Todos = ({ todos, toggleStatus }: Props) => {
  return (
    <>
      {["Todo", "Doing", "Done"].map((status: string) => (
        <div className={status.toLowerCase()} key={status}>
          {todos
            .filter((todo: Item) => todo.status === status)
            .map((todo: Item) => (
              <Todo key={todo.id} todo={todo} toggleStatus={toggleStatus} />
            ))}
        </div>
      ))}
    </>
  );
};

export default Todos;
