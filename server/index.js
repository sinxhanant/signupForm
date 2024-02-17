const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel  = require('./models/UserModel.jsx');

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users")

app.get('/', (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err=> res.json(err))
})

app.put('/editUser/:id', (req, res)=> {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age, 
        country: req.body.country})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id}).select('-password')

    .then(users => res.json(users))
    .catch(err => res.json(err))
    })

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, ()=>{
    console.log("Server is running")
})