module.exports = mongoose => {
    var schema = mongoose.Schema
    (
         {
               nombre: String,
                apellido_paterno: String,
                apellido_materno: String,
                rfc:String,
                email:String,
                password:String
             },
            { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("users", schema);
    return User;
};
