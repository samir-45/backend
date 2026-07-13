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


// DELETE /notes/:index
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        massage: "Note deleted successfully"
    })
})

// PATCH /notes/:index
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        massage: "Note updated successfully"
    })
})


module.exports = app