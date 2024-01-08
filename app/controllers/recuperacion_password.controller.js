const db = require("../models");
const Recuperacion_password = db.recuperacion_password;
exports.create = (req, res) => {
    if (!req.body.codigo) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const recuperacion_password = new Recuperacion_password({
        correo: req.body.correo,
        codigo: req.body.codigo
      });
    
    
      recuperacion_password
        .save(recuperacion_password)
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