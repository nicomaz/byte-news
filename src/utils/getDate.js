export function getDate() {
  const now = new Date();
  const currentDate = now.toDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return currentDate;
}

export function setDate(date) {
  let newDate = new Date(date);
  const dateMade = newDate.toDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateMade;
}
