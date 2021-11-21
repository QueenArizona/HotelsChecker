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
    <li className="hotel-item">
      {logo && <div className="hotel-logo"></div>}
      <div className="hotel-wrapper">
        <div className="hotel-item-header">
          <h4 className="hotel-item-title">{item.hotelName}</h4>
          <button className="favorite-button" onClick={handleClick}></button>
        </div>
        <div className="hotel-item-info">
          {date} <span className="info-separator">—</span> {count}{" "}
          {format(count, "days")}
        </div>
        <div className="hotel-item-footer">
          <div className="hotel-item-rating">
            {Array(item.stars)
              .fill("")
              .map((el, index) => ratingActive(`a${index}`))}
            {Array(5 - item.stars)
              .fill("")
              .map((el, index) => rating(index))}
          </div>
          <div className="hotel-item-price">
            Price:
            <span className="hotel-item-value">{item.priceAvg} ₽</span>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Hotel;
