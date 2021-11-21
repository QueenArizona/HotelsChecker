export function sortHotels(hotels, order) {
  if (!order) return hotels;
  const argument =
    order === "price-up" || order === "price-down" ? "priceAvg" : "stars";
  if (order === "price-up" || order === "rating-up") {
    hotels.sort(function (a, b) {
      if (a[argument] > b[argument]) {
        return 1;
      }
      if (a[argument] < b[argument]) {
        return -1;
      }
      return 0;
    });
  } else {
    hotels.sort(function (a, b) {
      if (a[argument] < b[argument]) {
        return 1;
      }
      if (a[argument] > b[argument]) {
        return -1;
      }
      return 0;
    });
  }
  console.log("sort");
  return hotels;
}
