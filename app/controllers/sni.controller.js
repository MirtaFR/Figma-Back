const db = require("../models");
const Sni = db.sni;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const sni = new Sni({
        anio:req.body.anio,
        nivel:req.body.nivel,
        acciones:req.body.acciones
      });
  
    
    
      sni
        .save(sni)
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