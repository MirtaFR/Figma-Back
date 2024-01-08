module.exports = app => {
    const sni = require("../controllers/sni.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", sni.create);
  
    router.get("/", sni.findAll);
  
  
    app.use('/api/sni', router);
  };