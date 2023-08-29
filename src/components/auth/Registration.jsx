import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/authSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirm: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
    setUserData({
      username: "",
      email: "",
      phone: "",
      password: "",
      password_confirm: "",
    });
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя:</label>
          <input
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div>
          <label>Подтверждение Пароля:</label>
          <input
            type="password"
            value={userData.password_confirm}
            onChange={(e) =>
              setUserData({ ...userData, password_confirm: e.target.value })
            }
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
