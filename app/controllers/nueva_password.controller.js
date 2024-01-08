const db = require("../models");
const NuevaPassword = db.nueva_password;
exports.create = (req, res) => {
    if (!req.body.nueva_contraseña) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const nueva_password = new NuevaPassword({
        nueva_contraseña: req.body.nueva_contraseña,
        confirmar_contraseña: req.body.confirmar_contraseña
      });
    
    
      nueva_password
        .save(nueva_password)
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