import React, { Component } from "react";
export default class TaskItem extends Component {
  render() {
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {this.props.task._id}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">{this.props.task.name}</h5>
          
          <a href="" className="btn btn-primary">
            View / Update
          </a>
        </div>
      </div>
    );
  }
}

