import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../coursesSlice";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({
    title: "",
    duration: null,
    lecture_count: null,
    direction: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(courseData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название курса"
          value={courseData.title}
          onChange={(e) =>
            setCourseData({ ...courseData, title: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Продолжительность курса"
          value={courseData.duration}
          onChange={(e) =>
            setCourseData({ ...courseData, duration: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Количество лекций"
          value={courseData.lecture_count}
          onChange={(e) =>
            setCourseData({ ...courseData, lecture_count: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Направление"
          value={courseData.direction}
          onChange={(e) =>
            setCourseData({ ...courseData, direction: e.target.value })
          }
        />

        {/* Добавьте другие поля для остальных данных курса */}
        <button type="submit">Добавить курс</button>
      </form>
    </div>
  );
};

export default AddCourse;
