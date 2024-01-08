module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                titulo:String,
                autor:String,
                editorial:String,
                referencia:String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Libro = mongoose.model("libro", schema);
    return Libro;
};
