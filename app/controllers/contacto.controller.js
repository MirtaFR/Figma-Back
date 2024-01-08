const db = require("../models");
const Contacto = db.contacto;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const contacto = new Contacto({
        correo_particular: req.body.correo_particular,
        correo_institucional: req.body.correo_institucional,
        telefono_principal: req.body.telefono_principal,
        celular: req.body.celular,
        institucion_laboral: req.body.institucion_laboral,
        adscripcion_especifica: req.body.adscripcion_especifica
      });
  
    
    
      contacto
        .save(contacto)
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