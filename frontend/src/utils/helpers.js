export const formatDate = (timestamp) => {
  const initialDate = new Date(timestamp);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = initialDate.getFullYear();
  const month = months[initialDate.getMonth()];
  const date = initialDate.getDate();

  const formattedDate = `${month} ${date}, ${year}`;

  return formattedDate;
};

export const formatTime = (timestamp) => {
  const initialDate = new Date(timestamp);
  return initialDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
