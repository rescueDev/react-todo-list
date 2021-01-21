import React, { useState } from "react";
import AllTasks from "./components/AllTasks/AllTasks";
import InputTodo from "./components/InputTodo/InputTodo";
import NotCompleted from "./components/NotCompleted/NotCompleted";
import "./App.css";
import Completed from "./components/Completed/Completed";
import { FaCheck } from "react-icons/fa";
import { MdDns } from "react-icons/md";

const App = () => {
  // Declare a new state variable, which we'll call "count"
  const [inputText, setInputText] = useState("");
  const [notCompleted, setNotCompleted] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <InputTodo
        inputText={inputText}
        setInputText={setInputText}
        notCompleted={notCompleted}
        setNotCompleted={setNotCompleted}
      />
      <NotCompleted
        notCompleted={notCompleted}
        setNotCompleted={setNotCompleted}
      />
      <Completed completed={completed} setCompleted={setCompleted} />
    </div>
  );
};
export default App;
