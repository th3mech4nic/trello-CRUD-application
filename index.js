const express = require("express");
const jwt = require("jsonwebtoken");
const {authMiddleware} = require("./middleware")

let USER_ID = 1;
let ORGANIZATIONS_ID = 1;
let BOARDS_ID = 1;
let ISSUES_ID = 1;


const USERS = [];
const ORGNIZATIONS = [];
const BOARDS = [];
const ISSUES = [];

const app = express();
app.use(express.json());

//CREAT endpoints
app.post("/signup", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username);
    if(userExists){
        res.status(411).json({
            message: "User with this username already exists"
        })
    }
    USERS.push({
        username,
        password,
        id: USER_ID++
    })

    res.json({
        message: "You have signed up successfully"
    })
})

app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username && u.password === password);
    if(!userExists){
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

    const token = jwt.sign({
        userId: userExists.id
    }, "superkey");

    res.json({
        token
    })
})

app.post("/organization", (req, res) =>{
    
})

app.post("/add-member-to-organization", (req, res) =>{
    
})

app.post("/board", (req, res) =>{
    
})

app.post("/issue", (req, res) =>{
    
})

//READ endpoints
app.get("/boards", (req, res) => {

})

app.get("/issues", (req, res) => {
    
})

app.get("/members", (req, res) => {
    
})

//UPDATE endpoints
app.put("/issues", (req, res) => {

})

//DELETE endpoints
app.delete("/members", (req, res) => {

})








app.listen(3000);