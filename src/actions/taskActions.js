import axios from "axios";
import { GET_ERRORS, GET_TASKS, GET_TASK, DELETE_TASK } from "./types";

export const createTask = (task, history) => async dispatch => {
  try {
    const res = await axios.post("/v1/tasks/addTask", task);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getTasks = () => async dispatch => {
  const res = await axios.get(`/v1/tasks/getTasks`);

  dispatch({
    type: GET_TASKS,
    payload: res.data
  });
};

export const getTask = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/v1/tasks/task/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data
    });
  } catch (err) {
    history.push("/");
  }
};

export const deleteTask = (id, history) => async dispatch => {
  try {
    if (window.confirm("Are you sure to delete this?")) {
      const res = await axios.delete(`/v1/tasks/task/${id}`);

      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    }
  } catch (err) {}
};
