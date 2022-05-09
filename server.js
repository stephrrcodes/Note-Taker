const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

//
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const notesPage = require('./db/db.json');

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
    const newNotes = request.body
    newNotes.id = uuidv4();
    notesPage.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notesPage);

//API route "DELETE" request
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, notesPage);
    res.json(true);
});

// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//deploy to heroku
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});