import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
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

              <div className="card mb-1 bg-light">
                <div className="card-header text-primary">
                  ID: projectSequence
                </div>
                <div className="card-body bg-light">
                  <h5 className="card-title">summary</h5>
                  <p className="card-text text-truncate ">acceptanceCriteria</p>
                  <a href="" className="btn btn-primary">
                    View / Update
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white">
                  <h3>In Progress</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-2">
                <div className="card-header bg-success text-white">
                  <h3>Done</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
