const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNewNote, deleteNote} = require('../../lib/notes');

console.log(createNewNote);

router.get('/notes', (req, res) => {
    const result = notes
    res.json(result)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note)
})


module.exports = router;