module.exports = app => {
    const recuperacion_password = require("../controllers/recuperacion_password.controller.js");

    var router = require("express").Router();

    router.post("/", recuperacion_password.create);

    router.get("/", recuperacion_password.findAll);

    app.use('/api/recuperacion_password', router);
};