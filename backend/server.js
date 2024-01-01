const app = require("./app");
const port = 3002;
const host = 'localhost';
const cors = require('cors');
const express = require('express');

const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://keizer:Keizer123@cluster.upznz0o.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to Mongo DB');
    }catch(error){
        console.log('MongoDB Error: ',error);
    }
};

const server = app.listen(port, host, ()=> {
    console.log(`Node server is listening to ${server.address().port}`)
});

connect();

app.use('/api', router);

