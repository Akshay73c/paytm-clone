const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes/router");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter); //v1- version1

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
