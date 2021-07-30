const express = require("express");
const app = express();
const data = require("./data");
const PORT = process.env.PORT || 5000;

app.get("/navigation", (req, res) => {
  let tempArray = [];
  for (const key in data) {
    tempArray.push({
      key: data[key].id
    });
  }
  res.json(tempArray);
});

app.get("/fooditems", (req, res) => {
  res.json(data);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, console.log(`server running at port no. ${PORT}`));
