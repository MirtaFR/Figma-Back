module.exports = app => {
    const libro = require("../controllers/libro.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", libro.create);
  
    router.get("/", libro.findAll);
  
  
    app.use('/api/libro', router);
  };