import * as React from "react";
import { Item } from "./Item";
import Todo from "./Todo";
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  ConnectDropTarget
} from "react-dnd";

interface Props {
  name: string;
  todos: Item[];
  move: (id: Object, name: string) => void;
}

interface InjectedProps {
  connectDropTarget?: ConnectDropTarget;
  isOver?: boolean;
}

type ResultProps = Props & InjectedProps;

const todoTarget = {
  drop(props: ResultProps, monitor: DropTargetMonitor) {
    props.move(monitor.getItem(), props.name);
  }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Todos = ({ name, todos, connectDropTarget, isOver }: ResultProps) => {
  return connectDropTarget(
    <div className={`${name} field`}>
      <h2>{name}</h2>
      <div className="todos">
        {todos.map((todo: Item) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default DropTarget("item", todoTarget, collect)(Todos);
