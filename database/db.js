const mongoose = require("mongoose")

const connectToDb = () => {
    mongoose
    .connect(
        "mongodb+srv://dbUser:admin@clustertodolist.l8cb1fb.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => {
        console.log("mongodb conectado!")
    }).catch((err) => console.log(err))

}
module.exports = connectToDb;