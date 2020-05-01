import React, { Fragment } from "react";

const TodoHeader = ({ title }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <hr />
    </Fragment>
  );
};

export default TodoHeader;
