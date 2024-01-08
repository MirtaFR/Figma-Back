module.exports = app => {
    const proyecto = require("../controllers/proyecto.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", proyecto.create);
  
    router.get("/", proyecto.findAll);
  
  
    app.use('/api/proyecto', router);
  };