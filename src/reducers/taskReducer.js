import { GET_TASKS, GET_TASK, DELETE_TASK } from "../actions/types";

const initialState = {
  ToDo: [],
  InProgress: [],
  Done: [],
  task: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        ToDo: action.payload.ToDo,
        InProgress: action.payload.InProgress,
        Done: action.payload.Done
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case DELETE_TASK:
      switch (action.payload.status) {
        case "ToDo":
          return {
            ...state,
            ToDo: state.ToDo.filter(task => task._id !== action.payload.id)
          };
        case "InProgress":
          return {
            ...state,
            InProgress: state.InProgress.filter(
              task => task._id !== action.payload.id
            )
          };
        case "Done":
          return {
            ...state,
            Done: state.Done.filter(task => task._id !== action.payload.id)
          };
      }

    default:
      return state;
  }
}
