module.exports = app => {
    const nueva_password = require("../controllers/nueva_password.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", nueva_password.create);
  
    router.get("/", nueva_password.findAll);
  
  
    app.use('/api/nueva_password', router);
  };