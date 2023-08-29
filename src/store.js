import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import paidCoursesSlice from "./paidCoursesSlice";

const store = configureStore({
  reducer: {
    courses: coursesSlice,
    paidCourses: paidCoursesSlice,
  },
});

export default store;
