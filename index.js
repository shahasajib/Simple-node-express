const express = require('express');
//react load data
var cors = require('cors')
const app = express();
const port = 5000


//react load data calling
app.use(cors())
// data body part
app.use(express.json())



app.get('/user', (req, res) => {
    res.send("Ami kaj korri monne monne ghhunne")
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

const users = [
    {
        id: 0,
        name: "Rhoan",
        email: "rhoan@gmail.com",
        mobile: "016568264",

    },
    {
        id: 1,
        name: "Shonni",
        email: "Shonni@gmail.com",
        mobile: "016568254",

    },
    {
        id: 2,
        name: "Rhonni",
        email: "rhonni@gmail.com",
        mobile: "016568244",

    },
    {
        id: 3,
        name: "Jammi",
        email: "jammi@gmail.com",
        mobile: "016568224",

    },
    {
        id: 4,
        name: "Shonni",
        email: "shonni@gmail.com",
        mobile: "016561364",

    },
    {
        id: 5,
        name: "Nitti",
        email: "nitti@gmail.com",
        mobile: "016258764",

    }
]


// user k send korar jonno ei kaj kortte hobbe.
app.get("/users", (req, res) => {
    // search korrar jonno ei bahbbe kortte hobbe

    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

// user k single/ id shohoo patthanor jonno ei kaj kortte hobbe.
// dyanmic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.get("/fruits", (req, res) => {
    res.send("mango khabba???")
})



// app.Method.......post
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body)
    res.json(newUser)
})

app.listen(port, () => {
    console.log("listening to port", 5000)
})