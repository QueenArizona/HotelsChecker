import React, { useMemo } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { selectSortOrder } from "../redux/favorites/actions";
import { sortHotels } from "../functions/sort";
import Hotel from "./Hotel";
import "../styles/Favorites.css";

function Favorites(props) {
  const { items, order } = useSelector((state) => state.favorites);
  const { options } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  const orders = [
    { order: "rating", name: "Рейтинг" },
    { order: "price", name: "Цена" },
  ];

  const hotels = useMemo(() => sortHotels(items, order), [items, order]);

  const handleSort = (order, type) => {
    dispatch(selectSortOrder(`${order}-${type}`));
  };

  return (
    <div className="favorites">
      <h3 className="favorites__title">Избранное</h3>
      <ul className="favorites__sorting-list">
        {orders.map((el, index) => (
          <li
            className={`favorites__sorting-item ${
              order === `${el.order}-up` || order === `${el.order}-down`
                ? "favorites__sorting-item--active"
                : ""
            }`}
            id={el.order}
            key={index}
          >
            <p className="favorites__sorting-name">{el.name}</p>
            <div className="favorites__sorting-action">
              <svg
                className={`favorites__sorting-arrow ${
                  order === `${el.order}-up`
                    ? "favorites__sorting-arrow--active"
                    : ""
                }`}
                width="9"
                height="6"
                viewBox="0 0 9 6"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleSort(el.order, "up")}
              >
                <path d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z" />
              </svg>
              <svg
                className={`favorites__sorting-arrow ${
                  order === `${el.order}-down`
                    ? "favorites__sorting-arrow--active"
                    : ""
                }`}
                width="9"
                height="7"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleSort(el.order, "down")}
              >
                <path d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z" />
              </svg>
            </div>
          </li>
        ))}
      </ul>
      <ul className="favorites__list">
        {items.length > 0 ? (
          hotels.map((el) => (
            <Hotel
              key={el.hotelId}
              item={el}
              date={moment(options ? options.date : new Date())
                .locale("en")
                .format("DD MMMM, YYYY")}
              count={options ? options.count : 1}
            />
          ))
        ) : (
          <p>В избранном нет отелей</p>
        )}
      </ul>
    </div>
  );
}

export default Favorites;
