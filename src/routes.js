import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoMenu from "./components/TodoMenu/TodoMenu";
import TodoEdit from "./components/TodoEdit/TodoEdit";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/todo_menu" component={TodoMenu} />
        <Route
          exact
          path="/todo_edit/:id"
          render={(props) => <TodoEdit {...props} name="TodoEdit" />}
        />
        <Route path="/" component={TodoMenu} />
      </Switch>
    </Router>
  );
};

export default Routes;
