import * as React from "react";
// import Todos from "./Todos";
// import Button from "./Button";
import Counter from "./Counter";

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
