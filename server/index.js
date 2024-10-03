const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  });

//Routers


