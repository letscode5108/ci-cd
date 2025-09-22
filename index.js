const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! Express server is running.");
});

app.get("/api/users", (req, res) => {
  res.json({
    message: "Users endpoint",
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Anie Ray" },
      
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = app;
