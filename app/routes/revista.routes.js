module.exports = app => {
    const revista = require("../controllers/revista.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", revista.create);
  
    router.get("/", revista.findAll);
  
  
    app.use('/api/revista', router);
  };