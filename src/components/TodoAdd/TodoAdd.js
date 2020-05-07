import React from "react";

import "./TodoAdd.scss";

const TodoAdd = ({ value, change, textAreaValue, textAreaChange, onClick }) => {
  return (
    <div className="card">
      <div className="content">
        <input
          type="text"
          placeholder="add title"
          value={value}
          onChange={change}
        />
        <textarea
          value={textAreaValue}
          onChange={textAreaChange}
          placeholder="........."
        ></textarea>
        <br />
        <div onClick={onClick} name="save" className="button-crud">
          Incluir
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
