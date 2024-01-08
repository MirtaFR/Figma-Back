const db = require("../models");
const Proyecto = db.proyecto;
exports.create = (req, res) => {
    if (!req.body.referencia) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const patente = new Patente({
        tipo: req.body.tipo,
        nombre_producto:req.body.nombre_producto,
        numero_registro:req.body.numero_registro,
        fecha:req.body.fecha,
        referencia: req.body.referencia
      });
  
    
    
      patente
        .save(patente)
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