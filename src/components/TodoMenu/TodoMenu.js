import React, { Component, Fragment } from "react";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAdd from "../TodoAdd/TodoAdd";

const BotaoCreate = ({ onClick }) => {
  return <button onClick={onClick}>Criar</button>;
};

class TodoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
    };
  }

  render() {
    return (
      <Fragment>
        <TodoHeader title="TODO List" />
        <BotaoCreate
          onClick={() =>
            this.setState({ ...this.state, showAdd: !this.state.showAdd })
          }
        />
        {this.state.showAdd && <TodoAdd />}
      </Fragment>
    );
  }
}

export default TodoMenu;
