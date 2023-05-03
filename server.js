const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");
const mysql = require("mysql2");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "Kissy54321!!",
    database: "ecommerce_db",
  },
  console.log(`Connected to the ecommerce_db database.`)
);

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
