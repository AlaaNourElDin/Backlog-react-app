import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "../../actions/taskActions";


class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      status: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 
  onSubmit(e) {
    e.preventDefault();

    const newTask = {
      name: this.state.name,
      status: this.state.status
    };

    this.props.createTask(newTask, this.props.history);
  }

  render() {
    return (
      <div className="addProjectTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2 className="display-4 text-center">Add Task</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="taskName"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Task Name"
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="ToDo">TO DO</option>
                    <option value="InProgress">IN PROGRESS</option>
                    <option value="Done">DONE</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddTask.propTypes = {
  createTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
 
});

export default connect(
  mapStateToProps,
  { createTask }
)(AddTask);

