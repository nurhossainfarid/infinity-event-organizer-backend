/**
 * Description: Backend for Event management system
 * Authority: Nur Hossain Farid
 * Date: 29/10/22
 */

// Dependencies
const express = require('express');

const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// handle all routes
const userRoutes = require('./routes/v1/user.route');
const organizationRoutes = require('./routes/v1/organization.route');
const packageRoutes = require('./routes/v1/package.router');

app.use('/v1/user', userRoutes);
app.use('/v1/organization', organizationRoutes);
app.use('/v1/package', packageRoutes);

// initial the server
app.get('/', (req, res) => {
    res.send('Server successfully running');
});

// exports
module.exports = app;
