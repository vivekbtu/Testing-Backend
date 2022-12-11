
const express = require("express");

const {connection} = require("./config/db");
const {userRouter} = require("./routes/users.route");

require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Hello");
})

const validator = (req,res, next) => {

    if(req.method === "POST")
    {
        const obj = req.body;

        if(typeof obj.Title === "string" && typeof obj.Note === "string" &&
        typeof obj.Tags === "string")
        {
            next();
        }
        else{
            res.send("Validation Failed");
        }
    }
    else{
        next();
    }
}

app.use(validator);

app.use("/users", userRouter);


const PORT = process.env.PORT;
app.listen(PORT, async()=> {
    try{
        await connection;
        console.log("Data connected to DB");
    }
    catch(err){
        console.log("Connection Failed");
        console.log(err);
    }
    console.log(`Listening on http://localhost:${PORT}`)
})

