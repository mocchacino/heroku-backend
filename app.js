const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hai kak Icha" });
});

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
