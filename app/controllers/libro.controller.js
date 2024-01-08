const db = require("../models");
const Libro = db.libro;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const libro = new Libro({
        titulo:req.body.titulo,
        autor:req.body.autor,
        editorial:req.body.editorial,
        referencia:req.body.referencia
      });
  
    
    
      libro
        .save(libro)
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