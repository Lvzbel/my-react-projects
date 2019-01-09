import React from "react";
import Todo from "./todo";

const TodoListTable = props => {
  return (
    <table className="table table-hover mt-3">
      <thead className="thead-dark">
        <tr>
          <th scope="col ">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Expected Completion</th>
          <th scope="col">Deadline</th>
          <th scope="col">Created On</th>
          <th scope="col">Completed</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <Todo todos={props.todos} onDelete={props.onDelete} />
      </tbody>
    </table>
  );
};

export default TodoListTable;
