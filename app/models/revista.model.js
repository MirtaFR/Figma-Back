module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                tipo:String,
                nombre_producto:String,
                no_registro:String,
                fecha_registro:String,
                referencia: String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Revista = mongoose.model("revista", schema);
    return Revista;
};
