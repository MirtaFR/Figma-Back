const db = require("../models");
const InicioSesion = db.inicio_sesion;
exports.create = (req, res) => {
    if (!req.body.rfc) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const inicio_sesion = new InicioSesion({
        rfc: req.body.rfc,
        contraseña: req.body.contraseña
      });
    
    
      inicio_sesion
        .save(inicio_sesion)
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