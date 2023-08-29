import React, { useEffect, useLayoutEffect, useState } from "react";
import timer from "../../assets/Group 57timer.png";
import calendar from "../../assets/Group 56calendar.png";
import video from "../../assets/Group 58video.png";
import wallet from "../../assets/Group 59wallet.png";
import python from "../../assets/Group 41phyton.png";
import Slider from "react-slick";

function ScheduleItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  // console.log(useWindowSize()[0]);
  return (
    <>
      {useWindowSize() > 990 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div className="oneCard">
            <div className="oneCard_header">
              <img className="img" src={python} alt="" />
              <span className="oneCard_header__text">
                Python (вечерная группа)
              </span>
            </div>
            <div className="oneCard_body">
              <p>
                Python - отличный выбор для начинающих, благодаря своей
                простоте, эффективности и широкому спектру применения.
              </p>
              <span>
                <img src={timer} alt="" />
                <p>
                  Продолжительность: <strong>7 месяцев</strong>
                </p>
              </span>
              <span>
                <img src={video} alt="" />
                <p>
                  Колличество видео-лекций: <strong>120</strong>
                </p>
              </span>
              <span>
                <img src={calendar} alt="" />
                <p>
                  Дата запуска курса: <strong>10.10.2023</strong>
                </p>
              </span>
              <span>
                <img src={wallet} alt="" />
                <p>
                  Стоимость курса: <strong>3500 сом</strong>
                </p>
              </span>
              <button className="header-left-btn">Записаться</button>
            </div>
          </div>
          <div className="oneCard">
            <div className="oneCard_header">
              <img className="img" src={python} alt="" />
              <span className="oneCard_header__text">
                Python (вечерная группа)
              </span>
            </div>
            <div className="oneCard_body">
              <p>
                Python - отличный выбор для начинающих, благодаря своей
                простоте, эффективности и широкому спектру применения.
              </p>
              <span>
                <img src={timer} alt="" />
                <p>
                  Продолжительность: <strong>7 месяцев</strong>
                </p>
              </span>
              <span>
                <img src={video} alt="" />
                <p>
                  Колличество видео-лекций: <strong>120</strong>
                </p>
              </span>
              <span>
                <img src={calendar} alt="" />
                <p>
                  Дата запуска курса: <strong>10.10.2023</strong>
                </p>
              </span>
              <span>
                <img src={wallet} alt="" />
                <p>
                  Стоимость курса: <strong>3500 сом</strong>
                </p>
              </span>
              <button className="header-left-btn">Записаться</button>
            </div>
          </div>
          <div className="oneCard">
            <div className="oneCard_header">
              <img className="img" src={python} alt="" />
              <span className="oneCard_header__text">
                Python (вечерная группа)
              </span>
            </div>
            <div className="oneCard_body">
              <p>
                Python - отличный выбор для начинающих, благодаря своей
                простоте, эффективности и широкому спектру применения.
              </p>
              <span>
                <img src={timer} alt="" />
                <p>
                  Продолжительность: <strong>7 месяцев</strong>
                </p>
              </span>
              <span>
                <img src={video} alt="" />
                <p>
                  Колличество видео-лекций: <strong>120</strong>
                </p>
              </span>
              <span>
                <img src={calendar} alt="" />
                <p>
                  Дата запуска курса: <strong>10.10.2023</strong>
                </p>
              </span>
              <span>
                <img src={wallet} alt="" />
                <p>
                  Стоимость курса: <strong>3500 сом</strong>
                </p>
              </span>
              <button className="header-left-btn">Записаться</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            <div className="oneCard oneCard_small">
              <div className="oneCard_header">
                <img className="img" src={python} alt="" />
                <span className="oneCard_header__text">
                  Python (вечерная группа)
                </span>
              </div>
              <div div className="oneCard_body">
                <p>
                  Python - отличный выбор для начинающих, благодаря своей
                  простоте, эффективности и широкому спектру применения.
                </p>
                <div>
                  <span>
                    <img src={timer} alt="" />
                    <p>7 месяцев</p>
                  </span>
                  <span>
                    <img src={video} alt="" />
                    <p>120</p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>10.10.2023</p>
                  </span>
                  <span>
                    <img src={wallet} alt="" />
                    <p>3500 сом</p>
                  </span>
                </div>
                <button className="header-left-btn">Записаться</button>
              </div>
            </div>
            <div className="oneCard oneCard_small">
              <div className="oneCard_header">
                <img className="img" src={python} alt="" />
                <span className="oneCard_header__text">
                  Python (вечерная группа)
                </span>
              </div>
              <div className="oneCard_body">
                <p>
                  Python - отличный выбор для начинающих, благодаря своей
                  простоте, эффективности и широкому спектру применения.
                </p>
                <div>
                  <span>
                    <img src={timer} alt="" />
                    <p>7 месяцев</p>
                  </span>
                  <span>
                    <img src={video} alt="" />
                    <p>120</p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>10.10.2023</p>
                  </span>
                  <span>
                    <img src={wallet} alt="" />
                    <p>3500 сом</p>
                  </span>
                </div>
                <button className="header-left-btn">Записаться</button>
              </div>
            </div>
            <div className="oneCard oneCard_small">
              <div className="oneCard_header">
                <img className="img" src={python} alt="" />
                <span className="oneCard_header__text">
                  Python (вечерная группа)
                </span>
              </div>
              <div className="oneCard_body">
                <p>
                  Python - отличный выбор для начинающих, благодаря своей
                  простоте, эффективности и широкому спектру применения.
                </p>
                <div>
                  <span>
                    <img src={timer} alt="" />
                    <p>7 месяцев</p>
                  </span>
                  <span>
                    <img src={video} alt="" />
                    <p>120</p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>10.10.2023</p>
                  </span>
                  <span>
                    <img src={wallet} alt="" />
                    <p>3500 сом</p>
                  </span>
                </div>
                <button className="header-left-btn">Записаться</button>
              </div>
            </div>
          </Slider>
        </div>
      )}
    </>
  );
}

export default ScheduleItem;
