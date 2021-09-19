const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://sundar:1234@nodeexpressprojects.e6o5m.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
            .connect(connectionString, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
}

module.exports = connectDB