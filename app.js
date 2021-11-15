const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors);

app.get("/", (req, res) => {
  res.send("Hai kak Icha");
});

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
