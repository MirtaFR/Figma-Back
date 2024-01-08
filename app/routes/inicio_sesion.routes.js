module.exports = app => {
    const inicio_sesion = require("../controllers/inicio_sesion.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", inicio_sesion.create);
  
    router.get("/", inicio_sesion.findAll);
  
  
    app.use('/api/inicio_sesion', router);
  };