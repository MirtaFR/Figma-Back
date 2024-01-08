module.exports = app => {
    const informacion_general = require("../controllers/informacion_general.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", informacion_general.create);
  
    router.get("/", informacion_general.findAll);
  
  
    app.use('/api/informacion_general', router);
  };