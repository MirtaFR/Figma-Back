module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                referencia:String,
                usuarios:String,
                monto_financiamiento:String,
                institucion_principal:String,
                instituciones_asociadas: String,
                fiente_financiamiento: String,
                productos_derivados: String,
                fecha_inicio: String,
                fecha_termino:String, 
                titulo: String,
                participacion: String,
                Area: String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Proyecto = mongoose.model("proyecto", schema);
    return Proyecto;
};
