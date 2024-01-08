module.exports = app => {
    const estancias = require("../controllers/estancias.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", estancias.create);
  
    router.get("/", estancias.findAll);
  
  
    app.use('/api/estancias', router);
  };