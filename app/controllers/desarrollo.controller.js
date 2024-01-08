const db = require("../models");
const Desarrollo = db.desarrollo;
exports.create = (req, res) => {
    if (!req.body.area) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const desarrollo = new Desarrollo({
        area: req.body.area,
        campo: req.body.campo,
        disciplina: req.body.disciplina,
        miembro: req.body.miembro,
        estudiante: req.body.estudiante,
        programa: req.body.programa,
        anio: req.body.anio
      });
  
    
    
      desarrollo
        .save(desarrollo)
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