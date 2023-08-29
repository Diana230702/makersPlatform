import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./consts";

export const getPaidCourses = createAsyncThunk(
  "courses/getPaidCourses",
  async () => {
    try {
      const response = await axios.get(`${API}/course/paid-courses/list/`);
      return response.data;
    } catch (error) {
      throw error; // Передаем ошибку выше для обработки
    }
  }
);

export const createPaidCourses = createAsyncThunk(
  "courses/createPaidCourses",
  async (paidCourseData) => {
    const response = await axios.post(
      `${API}/course/paid-course/`,
      paidCourseData
    );
    return response.data;
  }
);

export const editPaidCourses = createAsyncThunk(
  "courses/editPaidCourses",
  async (paidCourseData) => {
    const response = await axios.put(
      `${API}/course/paid-course/${paidCourseData.id}/`,
      paidCourseData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const deletePaidCourse = createAsyncThunk(
  "courses/deletePaidCourses",
  async (paidCourseId) => {
    await axios.delete(`${API}/course/paid-course/${paidCourseId}`);
    return paidCourseId;
  }
);
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId) => {
    await axios.delete(`${API}/course/free-course/${courseId}/`);
    return courseId;
  }
);

const paidCoursesSlice = createSlice({
  name: "paidCourses",
  initialState: {
    data: [], // Начальное состояние
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPaidCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPaidCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Обновление данных
      })
      .addCase(getPaidCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default paidCoursesSlice.reducer;
