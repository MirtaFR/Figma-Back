module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                anio:String,
                nivel:String,
                acciones:String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Sni = mongoose.model("sni", schema);
    return Sni;
};
