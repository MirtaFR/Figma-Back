module.exports = app => {
    const menu = require("../controllers/menu.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", menu.create);
  
    router.get("/", menu.findAll);
  
  
    app.use('/api/menu', router);
  };