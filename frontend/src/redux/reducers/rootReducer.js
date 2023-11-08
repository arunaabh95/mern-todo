import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

// could be used to combine multiple reducer in the futuer; for eg user reducer
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;