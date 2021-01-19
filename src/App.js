import React, { Component } from "react";
import InputTodo from "./components/InputTodo/InputTodo";

class App extends Component {
  state = {
    input: "",
  };
  setInputHandler = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Todo List React</h1>
        <InputTodo
          value={this.state.input}
          change={this.setInputHandler}
        ></InputTodo>
      </div>
    );
  }
}

export default App;
