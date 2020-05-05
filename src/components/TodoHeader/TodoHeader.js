import React from "react";

const TodoHeader = ({ title }) => {
  return (
    <div style={{ borderBottom: "0.2px solid #c0c0c0" }}>
      <h1>{title}</h1>
    </div>
  );
};

export default TodoHeader;
