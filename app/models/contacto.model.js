module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                correo_particular:String,
                correo_institucional:String,
                telefono_principal:String,
                celular:String,
                institucion_laboral: String,
                adscripcion_especifica: String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Contacto = mongoose.model("contacto", schema);
    return Contacto;
};
