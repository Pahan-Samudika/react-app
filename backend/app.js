const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req,res) => {
    var resObj = [];
    controller.getUsers(req,res,next => {
        res.send();
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req,res,(callback) => {
        res.send();
    });
});

app.post('/updateuser', (req, res) => {
    controller.updateUser(req,res,(callback) => {
        res.send(callback);
    });
});

app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req,res,(callback) => {
        res.send(callback);
    });
});
 

module.exports = app;