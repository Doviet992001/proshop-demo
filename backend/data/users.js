import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Do Viet",
    email: "viet@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Quynh Mai",
    email: "qmaiu@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
