const express = require("express");
const app = express();
const port = 3000;

app.get("/trang-chu", (req, res) => res.send("Hello-world"));

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
