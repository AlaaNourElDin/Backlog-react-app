import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";
import TaskItem from "./Tasks/TaskItem";

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const todoTasks = this.props.ToDo;
    const inProgress = this.props.InProgress;
    const done = this.props.Done;
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-secondary text-white">
                  <h3>TO DO</h3>
                </div>
              </div>
              {(todoTasks || []).map(task => (
                <TaskItem key={task._id} task={task}/>
              ))}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
              {(inProgress || []).map(task => (
                <TaskItem key={task._id} task={task}/>
              ))}
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
              {(done || []).map(task => (
                <TaskItem key={task._id} task={task}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ToDo: state.task.ToDo,
  InProgress: state.task.InProgress,
  Done: state.task.Done,
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Dashboard);
