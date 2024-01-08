module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                nombre:String,
                informacion_general:String,
                produccion:String,
                documento:String,
                guia: String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Menu = mongoose.model("menu", schema);
    return Menu;
};
