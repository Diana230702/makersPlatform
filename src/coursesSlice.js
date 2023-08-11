import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./consts";

export const getCourses = createAsyncThunk("courses/getCourse", async () => {
  const response = await axios.get(`${API}/course/free-courses/`);
  return response.data;
});

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData) => {
    const response = await axios.post(
      `${API}/course/free-courses/`,
      courseData
    );
    return response.data;
  }
);

export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async (courseData) => {
    const response = await axios.put(
      `${API}/course/free-course/${courseData.id}`,
      courseData
    );
    return response.data;
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId) => {
    await axios.delete(`${API}/course/free-course/${courseId}`);
    return courseId;
  }
);

// !------------------------------------------------------------
const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
