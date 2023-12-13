export function getDate() {
  const now = new Date();
  const currentDate = now.toDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return currentDate;
}
