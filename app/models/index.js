const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.informacion_general = require("./informacion_general.model.js")(mongoose);
db.inicio_sesion = require("./inicio_sesion.model.js")(mongoose);
db.recuperacion_password = require("./recuperacion_password.model.js")(mongoose);
db.nueva_password = require("./nueva_password.model.js")(mongoose);
db.lugar_nacimiento = require("./lugar_nacimiento.model.js")(mongoose);
db.domicilio_particular = require("./domicilio_particular.model.js")(mongoose);
db.contacto = require("./contacto.model.js")(mongoose);
db.desarrollo = require("./desarrollo.model.js")(mongoose);
db.menu = require("./menu.model.js")(mongoose);
db.proyecto = require("./proyecto.model.js")(mongoose);
db.patente = require("./patente.model.js")(mongoose);
db.articulo_divulgacion = require("./articulo_divulgacion.model.js")(mongoose);
db.revista = require("./revista.model.js")(mongoose);
db.estancias = require("./estancias.model.js")(mongoose);
db.grado_academico = require("./grado_academico.model.js")(mongoose);
db.libro = require("./libro.model.js")(mongoose);
db.sni = require("./sni.model.js")(mongoose);
module.exports = db;
