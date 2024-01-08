const db = require("../models");
const Informacion_general = db.informacion_general;
exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const informacion_general = new Informacion_general({
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        rfc: req.body.rfc,
        curp: req.body.curp,
        sexo: req.body.sexo
      });
    
    
      informacion_general
        .save(informacion_general)
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