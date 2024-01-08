module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                nueva_contraseña:String,
                confirmar_contraseña:String
             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const NuevaPassword = mongoose.model("nueva_password", schema);
    return NuevaPassword;
};
