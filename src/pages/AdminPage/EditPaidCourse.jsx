import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPaidCourses } from "../../paidCoursesSlice";

const EditPaidCourse = ({
  courseId,
  initialPaidTitle,
  onSave,
  onCancel,

  initialPaidDuration,
  initialPaidDescription,
  initialPaidLecture_count,
  initialPAidStart_date,
  initialPaidDirection,
  initialPaidPrice,
}) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(initialPaidTitle);
  const [editedDuration, setEditedDuration] = useState(initialPaidDuration);
  const [editedDescription, setEditedDescription] = useState(
    initialPaidDescription
  );
  const [editedLecture_count, setEditedLecture_count] = useState(
    initialPaidLecture_count
  );
  const [editedStart_date, setEditedStart_date] = useState(
    initialPAidStart_date
  );

  const [editedDirection, setEditedDirection] = useState(initialPaidDirection);
  const [editPrice, setEditPrice] = useState(initialPaidPrice);

  const handleSave = () => {
    const editedPaidCourseData = {
      id: courseId,
      title: editedTitle.toString(),
      duration: editedDuration,
      description: editedDescription.toString(),
      start_date: editedStart_date.toString(),
      lecture_count: editedLecture_count,
      direction: editedDirection.toString(),
      price: editPrice,
    };

    dispatch(editPaidCourses(editedPaidCourseData));
    onSave();
  };
  return (
    <div>
      <input
        type="text"
        value={editedTitle}
        placeholder="title"
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="duration"
        value={editedDuration}
        onChange={(e) => setEditedDuration(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="description"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <input
        placeholder="Lecture_count"
        type="number"
        value={editedLecture_count}
        onChange={(e) => setEditedLecture_count(Number(e.target.value))}
      />

      <input
        placeholder="price"
        type="number"
        value={editPrice}
        onChange={(e) => setEditPrice(Number(e.target.value))}
      />
      <input
        placeholder="Start date"
        type="text"
        value={editedStart_date}
        onChange={(e) => setEditedStart_date(e.target.value)}
      />
      <input
        placeholder="direction"
        type="number"
        value={editedDirection}
        onChange={(e) => setEditedDirection(e.target.value)}
      />

      <button onClick={handleSave}>Сохранить</button>
      <button onClick={onCancel}>Отмена</button>
    </div>
  );
};

export default EditPaidCourse;
