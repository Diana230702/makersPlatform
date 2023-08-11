import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getCourses } from "../../coursesSlice";
import EditCourse from "./EditCourse";

const CoursesList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.data.results);
  console.log(courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleDeleteCourse = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  // !----------------edit
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleEditCourse = (courseId) => {
    setEditingCourseId(courseId);
  };

  const handleCancelEditCourse = () => {
    setEditingCourseId(null);
  };
  return (
    <div>
      <h2>Список курсов</h2>
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id}>
              {course.id === editingCourseId ? (
                <EditCourse
                  courseId={course.id}
                  initialTitle={course.title}
                  initialDuration={course.duration}
                  onSave={handleCancelEditCourse}
                  onCancel={handleCancelEditCourse}
                />
              ) : (
                <>
                  {course.title} ({course.duration} часов)
                  <button onClick={() => handleEditCourse(course.id)}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDeleteCourse(course.id)}>
                    Удалить
                  </button>
                </>
              )}
            </li>
          ))
        ) : (
          <p>Загрузка данных...</p>
        )}
      </ul>
    </div>
  );
};

export default CoursesList;
