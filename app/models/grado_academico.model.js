module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                nivel:String,
                titulo:String,
                institucion:String,
                anio:String

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const GradoAcademico = mongoose.model("grado_academico", schema);
    return GradoAcademico;
};
