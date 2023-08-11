import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export default rootReducer;
