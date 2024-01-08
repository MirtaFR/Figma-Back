const db = require("../models");
const GradoAcademico = db.grado_academico;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const grado_academico = new GradoAcademico({
        nivel:req.body.nivel,
        titulo:req.body.titulo,
        institucion:req.body.institucion,
        anio:req.body.anio
      });
  
    
    
      grado_academico
        .save(grado_academico)
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