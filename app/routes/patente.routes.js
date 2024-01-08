module.exports = app => {
    const patente = require("../controllers/patente.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", patente.create);
  
    router.get("/", patente.findAll);
  
  
    app.use('/api/patente', router);
  };