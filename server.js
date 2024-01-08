const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//conection to BD

const db = require("./app/models");
db.mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to firts application." });
});

require("./app/routes/user.routes")(app);
require("./app/routes/inicio_sesion.routes")(app);
require("./app/routes/recuperacion_password.routes")(app);
require("./app/routes/nueva_password.routes")(app);
require("./app/routes/informacion_general.routes")(app);
require("./app/routes/lugar_nacimiento.routes")(app);
require("./app/routes/domicilio_particular.routes")(app);
require("./app/routes/contacto.routes")(app);
require("./app/routes/desarrollo.routes")(app);
require("./app/routes/menu.routes")(app);
require("./app/routes/proyecto.routes")(app);
require("./app/routes/patente.routes")(app);
require("./app/routes/articulo_divulgacion.routes")(app);
require("./app/routes/revista.routes")(app);
require("./app/routes/estancias.routes")(app);
require("./app/routes/grado_academico.routes")(app);
require("./app/routes/libro.routes")(app);
require("./app/routes/sni.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
