module.exports = app => {
    const lugar_nacimiento = require("../controllers/lugar_nacimiento.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", lugar_nacimiento.create);
  
    router.get("/", lugar_nacimiento.findAll);
  
  
    app.use('/api/lugar_nacimiento', router);
  };