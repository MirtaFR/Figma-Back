module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                institucion:String,
                proyecto:String,
                fecha_inicio:String,
                fecha_termino:String,
                acciones: String              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Estancias = mongoose.model("estancias", schema);
    return Estancias;
};
