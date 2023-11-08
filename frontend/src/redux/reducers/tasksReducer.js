import { DELETE_TASKS_FAILURE, DELETE_TASKS_REQUEST, DELETE_TASKS_SUCCESS, 
  GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, 
  POST_TASKS_FAILURE, POST_TASKS_REQUEST, POST_TASKS_SUCCESS,
  PUT_TASKS_FAILURE, PUT_TASKS_REQUEST, PUT_TASKS_SUCCESS, } from "../constants";

const initialState = {
  // initialState for get all tasks
  isLoading: false,
  tasks: [],
  error: null,

  // initialState for create a task
  isLoadingPost: false,
  successPost: null,
  errorPost: null,

  // initialState for delete a task
  isLoadingDelete: false,
  successDelete: null,
  errorDelete: null,

  //initialState for updating a task
  isLoadingPut: false,
  sucessPut: null,
  errorPut: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    // all task gets reducers
    case GET_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        isLoading: false,
        tasks: action.payload,
        error: null,
      };
    case GET_TASKS_FAILURE:
      return {
        isLoading: false,
        tasks: [],
        error: action.payload,
      };

    // single task create reducers
    case POST_TASKS_REQUEST:
      return {
        ...state,
        isLoadingPost: true,
      };
    case POST_TASKS_SUCCESS:
      return {
        ...state,
        isLoadingPost: false,
        successPost: action.payload,
        errorPost: null,
      };
    case POST_TASKS_FAILURE:
      return {
        ...state,
        isLoadingPost: false,
        successPost: null,
        errorPost: action.payload,
      };

    // single TASK delete reducers
    case DELETE_TASKS_REQUEST:
      return {
        ...state,
        isLoadingDelete: true,
      };
    case DELETE_TASKS_SUCCESS:
      return {
        ...state,
        isLoadingDelete: false,
        successDelete: action.payload,
        errorDelete: null,
      };
    case DELETE_TASKS_FAILURE:
      return {
        ...state,
        isLoadingDelete: false,
        successDelete: null,
        errorDelete: action.payload,
      };
      // single TASK delete reducers
    case PUT_TASKS_REQUEST:
      return {
        ...state,
        isLoadingPut: true,
      };
    case PUT_TASKS_SUCCESS:
      return {
        ...state,
        isLoadingPut: false,
        successPut: action.payload,
        errorPut: null,
      };
    case PUT_TASKS_FAILURE:
      return {
        ...state,
        isLoadingPut: false,
        successPut: null,
        errorPut: action.payload,
      };

    default:
      return state;
  }
};

export default tasksReducer;