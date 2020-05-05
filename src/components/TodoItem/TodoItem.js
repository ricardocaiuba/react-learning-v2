import React from "react";

import "./TodoItem.scss";

const TodoItem = ({ title, detail, editClick, deleteClick }) => {
  return (
    <div className="card">
      <div className="content">
        <h3>{title}</h3>
        <h5>{detail}</h5>
        <button onClick={editClick} className="button button-orange">
          Edit
        </button>
        <button onClick={deleteClick} className="button button-red">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
