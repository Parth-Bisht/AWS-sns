const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const emailRouter = require("./routes/emailSender");
const userRouter = require("./routes/userRoutes");
const connection = require("./db");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log("HELLO WORLD");
  console.log(req);
  return res.status(200).json({ msg: "Hello World" });
});

app.use("/api", emailRouter);
app.use("/api/user", userRouter);

// app.listen(4000, () => {
//   console.log("app is listening on port 4000");
// });

app.listen(4000, async (req, res) => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
  console.log("app is listening on port 4000");
});
