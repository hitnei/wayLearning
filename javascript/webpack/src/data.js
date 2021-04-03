const users = [
  { name: "mario", predium: true },
  { name: "lorem", predium: false },
  { name: "pick", predium: true },
  { name: "summe", predium: false },
  { name: "sad", predium: false },
  { name: "mario", predium: true },
  { name: "mario", predium: true },
];

const getPremUsers = (users) => {
  return users.filter((user) => user.predium);
};

export { getPremUsers, users as default };
