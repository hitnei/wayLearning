import { styleBody, addTitle, contact } from "./dom";
import users, { getPremUsers } from "./data";

addTitle("index file");
addTitle(contact);
console.log("index file");

console.log(users);

const premUsers = getPremUsers(users);
console.log(premUsers);
console.log(premUsers);
