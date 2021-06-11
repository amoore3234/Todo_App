import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo-components";
import EditTodo from "./components/edit-todo-components";
import TodosList from "./components/todos-list-components";

import logo from "./logo.png"

function App() {
  return (
    <Router>
      <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://linkedin.com/in/amoore3228" target="_blank">
                <img src={logo} width="45" height="30" alt="LinkedIn.com" />
            </a>
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todos</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
