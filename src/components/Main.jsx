import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import { hotelListFetch } from "../redux/utils/api";
import { format } from "../functions/format";
import Slider from "./Slider";
import Hotel from "./Hotel";
import { arrow } from "../svg";

function Main(props) {
  const { data, options } = useSelector((state) => state.hotels);
  const { items } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hotelListFetch(options));
  }, [dispatch, options]);

  return (
    <main className="main">
      <div className="main-header">
        <h3 className="main-title">
          Отели <span className="title-separator">{arrow}</span>{" "}
          {data.length > 0 ? data[0].location.name : "Москва"}
        </h3>
        <p className="main-date">
          {moment(options ? options.date : new Date())
            .locale("ru")
            .format("DD MMMM YYYY")}
        </p>
      </div>
      <Slider />
      <p className="main-info">
        Добавлено в Избранное: <strong>{items.length}</strong>{" "}
        {format(items.length, "hotel")}
      </p>
      <ul className="main-list">
        {data.map((el) => (
          <Hotel
            key={el.hotelId}
            item={el}
            date={moment(options ? options.date : new Date())
              .locale("en")
              .format("DD MMMM, YYYY")}
            count={options ? options.count : 1}
            logo={true}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
