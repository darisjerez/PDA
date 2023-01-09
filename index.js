require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./helpers/db");
const app = express();

const studentRouter = require("./routes/student.route");
const resourcesRouter = require("./routes/resources.route");

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(studentRouter);
app.use(resourcesRouter);

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
