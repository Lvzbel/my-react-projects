import React from "react";

const TodoForm = props => {
  return (
    <form>
      <div className="form-group">
        <label>Title</label>
        <input className="form-control" type="text" />
        <label>Description</label>
        <input type="textbox" />
      </div>
    </form>
  );
};

export default TodoForm;
