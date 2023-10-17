const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
