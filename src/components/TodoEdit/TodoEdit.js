import React, { useEffect, useState } from "react";
import TodoHeader from "../TodoHeader/TodoHeader";
import { Redirect } from "react-router-dom";

import "./TodoEdit.scss";

const TodoEdit = () => {
  const [data, setData] = useState({
    id: 0,
    title: "",
    detail: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.hasOwnProperty("ITEM")) {
      const item = JSON.parse(localStorage.getItem("ITEM"));
      setData({
        id: item.id,
        title: item.title,
        detail: item.detail,
      });
    }
  }, []);

  const handleChange = (field) => (e) => {
    setData({
      ...data,
      [field]: e.target.value,
    });
  };

  const Save = () => {
    localStorage.setItem("ITEM", JSON.stringify(data));
    setSuccess(true);
  };

  if (success) {
    return <Redirect to="/todo_menu" />;
  }

  return (
    <div className="container">
      <TodoHeader title="TODO List [Edit]" />
      <div className="card">
        <div className="content">
          <input
            onChange={handleChange("title")}
            type="text"
            value={data.title}
            placeholder="add title"
          />
          <textarea
            onChange={handleChange("detail")}
            value={data.detail}
            placeholder="..."
          ></textarea>
          <div onClick={Save} name="save" className="button-save">
            <p>Salvar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
