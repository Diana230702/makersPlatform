import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  courses: coursesReducer,
  auth: authReducer,
  paidCourses: paidCoursesReducer,
});

export default rootReducer;
