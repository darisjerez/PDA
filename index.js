const express = require("express");
const app = express();

const studentRouter = require("./routes/student");

const port = 3000 || process.env.PORT;

app.use(studentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
