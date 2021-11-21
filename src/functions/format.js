export function format(count, type) {
  if (count > 10 && count < 15) return type === "hotel" ? "отелей" : "дней";
  const lastDigit = count.toString().substring(count.length - 1);
  switch (lastDigit) {
    case "1":
      return type === "hotel" ? "отель" : "день";
    case "2":
    case "3":
    case "4":
      return type === "hotel" ? "отеля" : "дня";
    default:
      return type === "hotel" ? "отелей" : "дней";
  }
}
