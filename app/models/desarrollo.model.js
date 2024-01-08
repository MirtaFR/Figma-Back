module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                area:String,
                campo:String,
                disciplina:String,
                miembro:String,
                estudiante: String,
                programa: String,
                anio:String
              

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Desarrollo = mongoose.model("desarrollo", schema);
    return Desarrollo;
};
