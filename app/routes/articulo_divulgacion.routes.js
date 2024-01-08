module.exports = app => {
    const articulo_divulgacion = require("../controllers/articulo_divulgacion.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", articulo_divulgacion.create);
  
    router.get("/", articulo_divulgacion.findAll);
  
  
    app.use('/api/articulo_divulgacion', router);
  };