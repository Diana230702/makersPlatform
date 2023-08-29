import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePaidCourse, getPaidCourses } from "../../paidCoursesSlice";
import EditPaidCourse from "./EditPaidCourse";

const PaidCoursesList = () => {
  const dispatch = useDispatch();
  const paidCourses = useSelector((state) => state.paidCourses.data);
  console.log(paidCourses, "ghjk");

  useEffect(() => {
    dispatch(getPaidCourses()).catch((error) => {
      console.log("Error loading data:", error);
    });
  }, [dispatch]);
  //! ----------------
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleEditCourse = (courseId) => {
    setEditingCourseId(courseId);
  };

  const handleCancelEditCourse = () => {
    setEditingCourseId(null);
  };
  const handleDeletePaidCourse = (courseId) => {
    dispatch(deletePaidCourse(courseId));
  };

  return (
    <div>
      <div>
        <h2>Список курсов</h2>
        <ul>
          {paidCourses.length > 0 ? (
            paidCourses.map((course) => (
              <li key={course.id}>
                {course.id === editingCourseId ? (
                  <EditPaidCourse
                    courseId={course.id}
                    initialPaidTitle={course.title}
                    initialPaidDuration={course.duration}
                    initialPaidLecture_count={course.lecture_count}
                    initialPaidDirection={course.direction}
                    initialPAidStart_date={course.start_date}
                    initialPaidDescription={course.description}
                    onSave={handleCancelEditCourse}
                    onCancel={handleCancelEditCourse}
                  />
                ) : (
                  <>
                    {course.title} ({course.duration} часов)
                    <button onClick={() => handleEditCourse(course.id)}>
                      Редактировать
                    </button>
                    <button onClick={() => handleDeletePaidCourse(course.id)}>
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
    </div>
  );
};

export default PaidCoursesList;
