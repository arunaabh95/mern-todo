import axios from "axios";
import { DELETE_TASKS_FAILURE, DELETE_TASKS_REQUEST, DELETE_TASKS_SUCCESS, 
    GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, 
    POST_TASKS_FAILURE, POST_TASKS_REQUEST, POST_TASKS_SUCCESS,
    PUT_TASKS_FAILURE, PUT_TASKS_REQUEST, PUT_TASKS_SUCCESS, 
} from "./constants";

// make a action to gets all tasks
export const getTasks = async (dispatch) => {
  dispatch({ type: GET_TASKS_REQUEST });

  try {
    const res = await axios.get(process.env.REACT_APP_API_BASE_URL + "/tasks");
    dispatch({ type: GET_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TASKS_FAILURE, payload: error });
  }
};

// make a action to create a task
export const createTask = (payload) => async (dispatch) => {
  dispatch({ type: POST_TASKS_REQUEST });

  try {
    const res = await axios.post(process.env.REACT_APP_API_BASE_URL + "/task", {
      title: payload.taskTitle,
      description: payload.taskDescription,
    });
    dispatch({ type: POST_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_TASKS_FAILURE, payload: error });
  }
};

// make a action to update a task
export const updateTask = (payload) => async (dispatch) => {
    dispatch({ type: PUT_TASKS_REQUEST });
  
    try {
      const res = await axios.put(process.env.REACT_APP_API_BASE_URL + "/task/" + payload.taskId, {
        title: payload.taskTitle,
        description: payload.taskDescription,
        completed: payload.completed,
      });
      dispatch({ type: PUT_TASKS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: PUT_TASKS_FAILURE, payload: error });
    }
  };
// make a action to delete a task
export const deleteTask = (payload) => async (dispatch) => {
  dispatch({ type: DELETE_TASKS_REQUEST });

  try {
    const res = await axios.delete(process.env.REACT_APP_API_BASE_URL + "/task/" + payload.taskId);
    dispatch({ type: DELETE_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DELETE_TASKS_FAILURE, payload: error });
  }
};