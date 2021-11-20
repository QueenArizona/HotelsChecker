import {
  hotelsListRequest,
  hotelsListSuccess,
  hotelsListFailure,
} from "../hotels/actions.js";

export const hotelListFetch = (options) => async (dispatch) => {
  dispatch(hotelsListRequest());
  try {
    let checkIn, checkOut, location;
    if (options) {
      checkIn = new Date(options.date);
      checkOut = new Date();
      checkOut.setDate(checkIn.getDate() + Number(options.count));
      location = options.location;
    } else {
      checkIn = new Date();
      checkOut = new Date();
      checkOut.setDate(checkIn.getDate() + 1);
      location = "Moscow";
    }

    const response = await fetch(
      `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn.getFullYear()}-${
        checkIn.getMonth() + 1 > 9
          ? checkIn.getMonth() + 1
          : `0${checkIn.getMonth() + 1}`
      }-${
        checkIn.getDate() > 9 ? checkIn.getDate() : `0${checkIn.getDate()}`
      }&checkOut=${checkOut.getFullYear()}-${
        checkOut.getMonth() + 1 > 9
          ? checkOut.getMonth() + 1
          : `0${checkOut.getMonth() + 1}`
      }-${
        checkOut.getDate() > 9 ? checkOut.getDate() : `0${checkOut.getDate()}`
      }`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    if (data) {
      dispatch(hotelsListSuccess(data));
    }
  } catch (e) {
    dispatch(hotelsListFailure(e.message));
  }
};
