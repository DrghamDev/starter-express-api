const express = require('express')
const app = express()
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const MainRouter = require('./src/router/router');
dotenv.config();

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://drghamdev:SDt6cIV9k2JJBtCL@cluster0.nkrgt1o.mongodb.net/test");
        console.log(`MongoDB connected ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({
        message : "Welcome to my app",
    })
})

app.use('/', MainRouter);

connectDB().then(() => {
    app.listen(process.env.PORT || 3000)
}).catch((error) => {
    console.log(error);
});