require('dotenv').config();

const express = require('express');
const groceryRoutes = require("./routes/groceries.js");
const userRoutes = require("./routes/user.js");
const app = express();
const mongoose = require('mongoose')
app.use(express.json());
app.use((req, res, next) => {
    next()
});

//routes
app.use('/api/grocery', groceryRoutes);
app.use('/api/user', userRoutes);

//connect to db
mongoose.connect(process.env.MONGO)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to backend.");
    });
})
.catch((err) => {
    console.log(err);
});
