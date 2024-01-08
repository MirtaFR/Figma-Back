module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                rfc:String,
                contraseña:String
             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const InicioSesion = mongoose.model("inicio_sesion", schema);
    return InicioSesion;
};
