module.exports = app => {
    const grado_academico = require("../controllers/grado_academico.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", grado_academico.create);
  
    router.get("/", grado_academico.findAll);
  
  
    app.use('/api/grado_academico', router);
  };