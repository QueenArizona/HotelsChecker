import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favorites/actions";
import { format } from "../functions/format";
import { ratingActive, rating } from "../svg";
import "../styles/Hotel.css";

function Hotel({ item, date, count, logo }) {
  const { items } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (items.filter((el) => el.hotelId === item.hotelId).length) {
      dispatch(removeFavorite(item.hotelId));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <li className="hotel">
      {logo && <div className="hotel__logo"></div>}
      <div className="hotel__wrapper">
        <div className="hotel__header">
          <h4 className="hotel__title">{item.hotelName}</h4>
          <button
            className={`hotel__favorite-btn ${
              items.filter((el) => el.hotelId === item.hotelId).length
                ? "hotel__favorite-btn--active"
                : ""
            }`}
            onClick={handleClick}
          ></button>
        </div>
        <div className="hotel__info">
          {date} <span className="hotel__info-separator">—</span> {count}{" "}
          {format(count, "days")}
        </div>
        <div className="hotel__footer">
          <div className="hotel__rating">
            {Array(item.stars)
              .fill("")
              .map((el, index) => ratingActive(`a${index}`))}
            {Array(5 - item.stars)
              .fill("")
              .map((el, index) => rating(index))}
          </div>
          <div className="hotel__price">
            Price:
            <span className="hotel__price-value">{item.priceAvg} ₽</span>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Hotel;
