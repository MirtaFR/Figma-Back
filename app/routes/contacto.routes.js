module.exports = app => {
    const contacto = require("../controllers/contacto.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", contacto.create);
  
    router.get("/", contacto.findAll);
  
  
    app.use('/api/contacto', router);
  };