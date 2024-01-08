const db = require("../models");
const DomicilioParticular = db.domicilio_particular;
exports.create = (req, res) => {
    if (!req.body.codigo_postal) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const domicilio_particular = new DomicilioParticular({
        codigo_postal: req.body.codigo_postal,
        calle: req.body.calle,
        numero: req.body.numero,
        colonia: req.body.colonia,
        municipio: req.body.municipio,
        estado: req.body.estado,
        pais: req.body.pais
      });
    
    
      domicilio_particular
        .save(domicilio_particular)
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