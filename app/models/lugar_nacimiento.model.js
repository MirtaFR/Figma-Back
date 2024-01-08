module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                pais:String,
                estado:String,
                ciudad:String,
                fecha_nacimiento:Date,
                no_fm: String

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const LugarNacimiento = mongoose.model("lugar_nacimiento", schema);
    return LugarNacimiento;
};
