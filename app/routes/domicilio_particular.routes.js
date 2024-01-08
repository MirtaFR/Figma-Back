module.exports = app => {
    const domicilio_particular = require("../controllers/domicilio_particular.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", domicilio_particular.create);
  
    router.get("/", domicilio_particular.findAll);
  
  
    app.use('/api/domicilio_particular', router);
  };