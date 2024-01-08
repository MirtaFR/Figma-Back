module.exports = app => {
    const desarrollo = require("../controllers/desarrollo.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", desarrollo.create);
  
    router.get("/", desarrollo.findAll);
  
  
    app.use('/api/desarrollo', router);
  };