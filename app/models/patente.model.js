module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                tipo:String,
                nombre_producto:String,
                numero_registro:String,
                fecha:String,
                referencia: String
        

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Patente = mongoose.model("patente", schema);
    return Patente;
};
