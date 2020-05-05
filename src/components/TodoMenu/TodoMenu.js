import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoItem from "../TodoItem/TodoItem";

import "./TodoMenu.scss";

const ButtonCreate = ({ onClick }) => {
  return (
    <div className="margin-top">
      <div className="button-create" onClick={onClick}>
        <p>Create new</p>
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  title: "",
  detail: "",
  showAdd: false,
  list: [],
};

class TodoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("ITEM")) {
      const item = JSON.parse(localStorage.getItem("ITEM"));
      this.AddItemChanged(item);

      localStorage.removeItem("ITEM");
    }
  }

  AddItemChanged(item) {
    let _List = this.state.list.filter((e) => e.id !== item.id);
    _List.push(item);
    this.setState({
      ...this.state,
      list: _List,
    });
  }

  AddItem() {
    let _List = this.state.list;
    let item = {
      id: _List.length + 1,
      title: this.state.title,
      detail: this.state.detail,
    };

    _List.push(item);

    this.setState({ ...this.state, INITIAL_STATE });
  }

  EditItem(item) {
    localStorage.setItem("ITEM", JSON.stringify(item));
    this.props.history.push(`/todo_edit/${item.id}`);
  }

  RemoveItem(item) {
    let _List = this.state.list.filter((e) => e.id !== item.id);
    this.setState({
      ...this.state,
      list: _List,
    });
  }

  render() {
    return (
      <div className="container">
        <TodoHeader title="TODO List" />
        <ButtonCreate
          onClick={() =>
            this.setState({ ...this.state, showAdd: !this.state.showAdd })
          }
        />
        {this.state.showAdd && (
          <TodoAdd
            value={this.state.title}
            change={(e) =>
              this.setState({ ...this.state, title: e.target.value })
            }
            textAreaValue={this.state.detail}
            textAreaChange={(e) =>
              this.setState({ ...this.state, detail: e.target.value })
            }
            onClick={() => this.AddItem()}
          />
        )}

        {this.state.list.map((element, index) => {
          return (
            <TodoItem
              key={index}
              title={element.title}
              detail={element.detail}
              editClick={(e) => this.EditItem(element)}
              deleteClick={(e) => this.RemoveItem(element)}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(TodoMenu);
