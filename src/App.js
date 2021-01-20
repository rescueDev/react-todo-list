import React, { Component } from "react";
import AllTasks from "./components/AllTasks/AllTasks";
import InputTodo from "./components/InputTodo/InputTodo";
import NotCompleted from "./components/NotCompleted/NotCompleted";
import "./App.css";
import Completed from "./components/Completed/Completed";
import { FaCheck } from "react-icons/fa";
import { MdDns } from "react-icons/md";

class App extends Component {
  state = {
    input: "",
    tasks: {
      completed: [],
      notCompleted: [],
    },
  };
  setInputHandler = (e) => {
    this.setState({ input: e.target.value });
  };
  addtaskHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ input: "" });
      //console.log("pressed enter key");

      //destructuring tasks
      const {
        tasks: { completed, notCompleted },
      } = this.state;
      //pushing task in notcompleted
      if (this.state.input !== "") {
        notCompleted.push(this.state.input);
      }
      console.log(this.state.tasks.notCompleted);
    }
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <h1>Todo List React</h1>
        <InputTodo
          value={this.state.input}
          change={this.setInputHandler}
          add={this.addtaskHandler}
        ></InputTodo>
        <NotCompleted tasks={tasks}></NotCompleted>
        <Completed tasks={tasks}></Completed>
      </div>
    );
  }
}

export default App;
