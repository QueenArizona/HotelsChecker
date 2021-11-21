import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addError } from "../redux/errors/actions";
import { searchFieldChange, searchFieldClear } from "../redux/search/actions";
import { hotelListOptions } from "../redux/hotels/actions";
import "../styles/Search.css";

function Search(props) {
  const { location, date, count } = useSelector((state) => state.search);
  const { errors } = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(searchFieldChange(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isLocationValid = !!location.trim();
    const isDateValid = !!date && new Date(date) >= new Date();
    const isCountValid = !!count && count > 0;
    if (!isLocationValid) {
      dispatch(addError("location"));
    }
    if (!isDateValid) {
      dispatch(addError("date"));
    }
    if (!isCountValid) {
      dispatch(addError("count"));
    }
    if (isLocationValid && isDateValid && isCountValid) {
      dispatch(hotelListOptions({ location, date, count }));
      dispatch(searchFieldClear());
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div
        className={`search-form-field ${
          errors.includes("location") ? "error-form-field" : ""
        }`}
      >
        <label className="search-input-title" htmlFor="location">
          Локация
        </label>
        <input
          className="search-input"
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
        <p className="search-message">Локация не должна быть пустой</p>
      </div>
      <div
        className={`search-form-field ${
          errors.includes("date") ? "error-form-field" : ""
        }`}
      >
        <label className="search-input-title" htmlFor="date">
          Дата заселения
        </label>
        <input
          className="search-input"
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
        />
        <p className="search-message">Выберите предстоящую дату</p>
      </div>
      <div
        className={`search-form-field ${
          errors.includes("count") ? "error-form-field" : ""
        }`}
      >
        <label className="search-input-title" htmlFor="count">
          Количество дней
        </label>
        <input
          className="search-input"
          id="count"
          type="number"
          name="count"
          value={count}
          onChange={handleChange}
        />
        <p className="search-message">Введите число больше 0</p>
      </div>
      <button className="search-button">Найти</button>
    </form>
  );
}

export default Search;
