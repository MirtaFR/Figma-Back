const db = require("../models");
const Menu = db.menu;
exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const menu = new Menu({
        nombre: req.body.nombre,
        informacion_general: req.body.informacion_general,
        produccion: req.body.produccion,
        documento: req.body.documento,
        guia: req.body.guia
      });
  
    
    
      menu
        .save(menu)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Ocurrio un error al llenar la información"
          });
        });
    };
    exports.findAll = (req, res) => {
    };

    exports.findOne = (req, res) => {
    
    };
    
    exports.update = (req, res) => {
    
    };
    
    
    exports.delete = (req, res) => {
    
    };
    

    exports.deleteAll = (req, res) => {
    
    };
    
    
    exports.findAllPublished = (req, res) => {
    
    };