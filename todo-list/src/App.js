import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import NavBar from "./components/navbar";
import TodoListTable from "./components/todoListTable";
import TodoForm from "./components/form";

class App extends Component {
  state = {
    todos: [
      {
        id: "1",
        title: "EDX CyberSecurity",
        note: "I just started this one this week",
        expected: moment(),
        createdAt: moment(),
        expiration: moment(),
        completed: false
      },
      {
        id: "2",
        title: "React with Mosh",
        note: "30% progress",
        expected: moment(),
        createdAt: moment(),
        expiration: moment(),
        completed: false
      },
      {
        id: "3",
        title: "Todo App",
        note:
          "To make sure I understand the concepts I need to finish this simple app",
        expected: moment(),
        createdAt: moment(),
        expiration: moment(),
        completed: false
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar title={"Todo List - React Project 1"} />
        <main role="main" className="container">
          <TodoListTable todos={this.state.todos} />
          <TodoForm />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
