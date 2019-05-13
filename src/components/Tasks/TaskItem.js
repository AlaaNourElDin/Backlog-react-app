import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask } from "../../actions/taskActions";

class TaskItem extends Component {
  onDeleteClick = (id,status) => {
    this.props.deleteTask(id,status);
  };

  render() {
    const { task } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {task._id}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">{task.name}</h5>

          <Link to={`/updateTask/${task._id}`} className="btn btn-primary">
            View / Update
          </Link>

          <button
            onClick={this.onDeleteClick.bind(this, task._id,task.status)}
            className="btn btn-danger ml-4"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteTask }
)(TaskItem);
