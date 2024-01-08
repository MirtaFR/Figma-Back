module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
                codigo_postal:String,
                calle:String,
                numero:String,
                colonia:String,
                municipio: String,
                estado: String,
                pais: String

             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const DomicilioParticular = mongoose.model("domicilio_particular", schema);
    return DomicilioParticular;
};
