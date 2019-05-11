import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/Tasks/AddTask";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path ="/" component={Dashboard} />
        <Route exact path ="/addTask" component={AddTask} />
      </div>
    </Router>
  );
}

export default App;
