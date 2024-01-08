const db = require("../models");
const Estancias = db.estancias;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const estancias = new Estancias({
        institucion:req.body.institucion,
        proyecto:req.body.proyecto,
        fecha_inicio:req.body.fecha_inicio,
        fecha_termino:req.body.fecha_termino,
        acciones:req.body.acciones             
      });
  
    
    
      estancias
        .save(estancias)
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