const express = require('express');
const mongoose = require('mongoose');
const argonautesRoutes = require('./routes/argonautes.routes');
const cors = require("cors")
require('dotenv').config()


const app = express();

mongoose.connect(`mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@cluster0.oom1r.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
    
app.use(express.json());
app.use(cors());
    

app.use('/api/argonautes', argonautesRoutes);


module.exports = app;