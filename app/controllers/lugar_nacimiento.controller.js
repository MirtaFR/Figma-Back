const db = require("../models");
const LugarNacimiento = db.lugar_nacimiento;
exports.create = (req, res) => {
    if (!req.body.pais) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const lugar_nacimiento = new LugarNacimiento({
        pais: req.body.pais,
        estado: req.body.estado,
        ciudad: req.body.ciudad,
        fecha_nacimiento: req.body.fecha_nacimiento,
        no_fm: req.body.no_fm
      });
    
    
      lugar_nacimiento
        .save(lugar_nacimiento)
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