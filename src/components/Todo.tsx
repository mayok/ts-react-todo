import { Item } from "./Interfaces";

import * as React from "react";
import {
  DragSource,
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor
} from "react-dnd";

interface Props {
  todo: Item;
}

interface InjectedProps {
  connectDragSource?: ConnectDragSource;
  isDragging?: boolean;
}

type ResultProps = Props & InjectedProps;

const todoSource = {
  beginDrag(props: ResultProps) {
    return {
      id: props.todo.id
    };
  }
};

function collect(connect: DragSourceConnector, monitor: DragSourceMonitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Todo extends React.Component<ResultProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { todo, connectDragSource, isDragging }: ResultProps = this.props;

    return connectDragSource(
      <div className="item" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <span>{todo.text}</span>
      </div>
    );
  }
}

export default DragSource("item", todoSource, collect)(Todo);
