module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                titulo_articulo:String,
                autor:String,
                fecha_aceptado:String,
                fecha_publicado:String,
                nombre_revista: String,
                referencia: String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Articulo_divulgacion = mongoose.model("articulo_divulgacion", schema);
    return Articulo_divulgacion;
};
