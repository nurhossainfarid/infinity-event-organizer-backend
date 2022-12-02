/**
 * Description: Backend for Event management system
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

// Dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const app = require('./app');

// database connection
mongoose.connect(process.env.REAL_DATABASE).then(() => {
    console.log('Database connected successfully'.red.bold);
});

// server running port
const port = process.env.PORT;

// server start
app.listen(port, () => {
    console.log(`Server is running at ${port}`.yellow.bold);
});
