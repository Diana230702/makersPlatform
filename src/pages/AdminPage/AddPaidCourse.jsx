import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPaidCourses } from "../../paidCoursesSlice";

const AddPaidCourse = () => {
  const dispatch = useDispatch();
  const [coursePaidData, setCoursePaidData] = useState({
    title: "",
    description: "",
    duration: null,
    lecture_count: 0,
    start_date: null,
    price: null,
    direction: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPaidCourses(coursePaidData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название курса"
          value={coursePaidData.title}
          onChange={(e) =>
            setCoursePaidData({ ...coursePaidData, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Описание"
          value={coursePaidData.description}
          onChange={(e) =>
            setCoursePaidData({
              ...coursePaidData,
              description: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Продолжительность курса"
          value={coursePaidData.duration}
          onChange={(e) =>
            setCoursePaidData({ ...coursePaidData, duration: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Количество лекций"
          value={coursePaidData.lecture_count}
          onChange={(e) =>
            setCoursePaidData({
              ...coursePaidData,
              lecture_count: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Дата старта"
          value={coursePaidData.start_date}
          onChange={(e) =>
            setCoursePaidData({
              ...coursePaidData,
              start_date: e.target.value,
            })
          }
        />
        <input
          type="number"
          placeholder="цена"
          value={coursePaidData.price}
          onChange={(e) =>
            setCoursePaidData({
              ...coursePaidData,
              price: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Направление"
          value={coursePaidData.direction}
          onChange={(e) =>
            setCoursePaidData({ ...coursePaidData, direction: e.target.value })
          }
        />

        {/* Добавьте другие поля для остальных данных курса */}
        <button type="submit">Добавить платный курс</button>
      </form>
    </div>
  );
};

export default AddPaidCourse;
