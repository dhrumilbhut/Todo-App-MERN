require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const cors = require("cors");

const todosRoutes = require("./routes/todosRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToDB();
app.use("/user", userRoutes);
app.use("/", todosRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running
  `);
});
