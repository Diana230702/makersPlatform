import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCourse } from "../../coursesSlice";

const EditCourse = ({
  courseId,
  initialTitle,
  onSave,
  onCancel,
  initialDuration,
  initialLecture_count,
  initialDirection,
}) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDuration, setEditedDuration] = useState(initialDuration);
  const [editedLecture_count, setEditedLecture_count] =
    useState(initialLecture_count);
  const [editedDirection, setEditedDirection] = useState(initialDirection);

  const handleSave = () => {
    const editedCourseData = {
      id: courseId,
      title: editedTitle,
      duration: editedDuration,
      lecture_count: editedLecture_count,
      direction: editedDirection,
    };
    dispatch(editCourse(editedCourseData));
    onSave();
  };

  return (
    <div>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        type="number"
        value={editedDuration}
        onChange={(e) => setEditedDuration(e.target.value)}
      />
      <input
        type="number"
        value={editedLecture_count}
        onChange={(e) => setEditedLecture_count(e.target.value)}
      />
      <input
        type="number"
        value={editedDirection}
        onChange={(e) => setEditedDirection(e.target.value)}
      />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={onCancel}>Отмена</button>
    </div>
  );
};

export default EditCourse;
