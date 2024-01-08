module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nombre: String,
            apellido_paterno: String,
            apellido_materno: String,
            rfc: String,
            curp: String,
            sexo: {
                type: String,
                enum: ["Masculino", "Femenino"]
            }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Informacion_general = mongoose.model("informacion_general", schema);
    return Informacion_general;
};
