import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/Tasks/AddTask";
import { Provider } from "react-redux";
import store from "./store";
import UpdateTask from "./components/Tasks/UpdateTask";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/addTask" component={AddTask} />
          <Route exact path="/updateTask/:id" component={UpdateTask} />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
