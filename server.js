const express = require ('express');
// port system
const PORT = process.env.PORT || 3001;

const app = express();

//
const fs = require('fs');
const path = require('path');
const uuid = require('uuid')
const notes = require('./db/db.json')

// set up url parsing, json data and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API route "GET" request
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

//API route "POST" request
app.post ("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))});
    const newNotes= re.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);

//API route "DELETE" request
app.delete


// HTML Routes

// calls index.html
app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
// calls notes.html
app.get("/notes", function (req,res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//deploy to heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});