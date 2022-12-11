
const express = require("express");

const {Usermodel} = require("../Models/user.model");

const userRouter = express.Router();


// get method
userRouter.get("/", async(req,res) => {
    // const params = req.query;
    try{
        const users = await Usermodel.find();
        res.send(users);
    }
    catch(err){

        res.send("Something error in get method");
        console.log(err);
    }
    
})

// pagination

userRouter.get("/pagination", async(req,res) => {
    const {page_no} = req.query;
    const Id = Number(page_no);
    
    try{
        const users = await Usermodel.find().limit(2).skip((Id - 1)*2);
        res.send(users);
    }
    catch(err){

        res.send("Something error in get method");
        console.log(err);
    }
    
})


// users/create
// post method
userRouter.post("/create", async(req,res) => {

    try{
        const data = req.body;
        await Usermodel.insertMany([data])

        res.send("Data create");
    }
    catch(err){
        console.log(err);
        res.send("Something error in post Method");
    }
})

// patch method
userRouter.patch("/update/:userID", async(req,res) => {

    const Id = req.params.userID;
    // Id = Number(Id);
    const payload = req.body;

    try{
        const query = await Usermodel.findByIdAndUpdate({_id : Id}, payload);
        res.send("Data Updated");
    }
    catch(err){
        console.log(err);
        res.send(" Something error in Patch Method");
    }
})

// delete method
userRouter.delete("/delete/:userID", async(req,res) => {

    const Id = req.params.userID;

    try{
        const query = await Usermodel.findByIdAndDelete({_id: Id});
        res.send("User deleted successfully");
    }
    catch(err){
        res.send("Something error in Delete Method")
        console.log(err);
    }
})


module.exports = {userRouter};

