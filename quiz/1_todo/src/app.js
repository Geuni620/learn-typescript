let arr = [
  {
    gender: "male",
    name: "John",
  },
  {
    gender: "female",
    name: "sarah",
  },
  {
    gender: "mail",
    name: "bone",
  },
];

// const filtered = arr.filter((item) => item.gender === "female");
const filtered = arr.filter((item) => {
  const filteredItem = item.gender === "female";
  return filteredItem;
});
