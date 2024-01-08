const db = require("../models");
const Articulo_divulgacion = db.articulo_divulgacion;
exports.create = (req, res) => {
    if (!req.body.correo_particular) {
        res.status(400).send({ message: "Campo Obligatorio!" });
        return;
      }
    
    
      const articulo_divulgacion = new Articulo_divulgacion({
        titulo_articulo:req.body.titulo_articulo,
        autor:req.body.autor,
        fecha_aceptado:req.body.fecha_aceptado,
        fecha_publicado:req.body.fecha_publicado,
        nombre_revista:req.body.nombre_revista,
        referencia:req.body.referencia
      });
  
    
    
      articulo_divulgacion
        .save(articulo_divulgacion)
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