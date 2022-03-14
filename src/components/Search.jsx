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

  const changeField = (event) => {
    dispatch(searchFieldChange(event.target.name, event.target.value));
  };

  const search = (event) => {
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
    <form className="search__form" onSubmit={search}>
      <div
        className={`search__formfield ${
          errors.includes("location") ? "search__formfield--error" : ""
        }`}
      >
        <label className="search__input-title" htmlFor="location">
          Локация
        </label>
        <input
          className="search__input"
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={changeField}
        />
        <p className="search__message">Локация не должна быть пустой</p>
      </div>
      <div
        className={`search__formfield ${
          errors.includes("date") ? "search__formfield--error" : ""
        }`}
      >
        <label className="search__input-title" htmlFor="date">
          Дата заселения
        </label>
        <input
          className="search__input"
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={changeField}
        />
        <p className="search__message">Выберите предстоящую дату</p>
      </div>
      <div
        className={`search__formfield ${
          errors.includes("count") ? "search__formfield--error" : ""
        }`}
      >
        <label className="search__input-title" htmlFor="count">
          Количество дней
        </label>
        <input
          className="search__input"
          id="count"
          type="number"
          name="count"
          value={count}
          onChange={changeField}
        />
        <p className="search__message">Введите число больше 0</p>
      </div>
      <button className="search__btn">Найти</button>
    </form>
  );
}

export default Search;
