// Create a Server

const express = require("express");

const app = express()
app.use(express.json())


const notes = []

// POST /notes
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        massage: "note created Successfully"
    })
})

// GET /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        massage: "notes fetched successfully",
        notes: notes
    })
})


module.exports = app