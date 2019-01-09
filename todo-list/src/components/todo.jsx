import React, { Component } from "react";
import moment from "moment";

const Todo = props => (
  <React.Fragment>
    {props.todos.map(todo => {
      return (
        <tr key={todo.id}>
          <th scope="row">{todo.id}</th>
          <td>{todo.title}</td>
          <td>{todo.note}</td>
          <td>{todo.expected.format("MMM Do YY")}</td>
          <td>{todo.createdAt.format("MMM Do YY")}</td>
          <td>{todo.expiration.format("MMM Do YY")}</td>
          <td>{todo.completed ? "yes" : "no"}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    })}
  </React.Fragment>
);

export default Todo;
