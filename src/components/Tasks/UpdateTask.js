import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask, getTask } from "../../actions/taskActions";

class UpdateTask extends Component {
  constructor() {
    super();
    this.state = {
      _id:"",
      name: "",
      status: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.props.getTask(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    const { _id, name, status } = nextProps.task;

    this.setState({
      _id,
      name,
      status
    });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();

    const newTask = {
      _id: this.state._id,
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
              <h2 className="display-4 text-center">Update Task</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
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
UpdateTask.propTypes = {
  getTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  task: state.task.task
});

export default connect(
  mapStateToProps,
  { createTask, getTask }
)(UpdateTask);
