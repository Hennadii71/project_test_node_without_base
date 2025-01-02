import fs from "fs/promises";
import { message } from "./users/index.js";
import detectFileEncoding from "detect-file-encoding-and-language";

console.log(message);
console.log("Hello world");
// fs.readFile("./users/users.json")
//   .then((data) => {
//     console.log(JSON.parse(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const readUsers = async () => {
  //   const data = await fs.readFile("./users/users.json");

  const { encoding } = await detectFileEncoding("./users/users.json");
  const text = await fs.readFile("./users/users.json", encoding);
  console.log(text);
};

readUsers();
