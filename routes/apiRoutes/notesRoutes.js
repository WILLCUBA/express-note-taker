const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNewNote, noteToBeDeleted} = require('../../lib/notes');



router.get('/notes', (req, res) => {
    const result = notes
    res.json(result)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note)
})

router.delete('/notes/:id', (req,res) => {
    const { id } = req.params;
    const noteIndex = notes.findIndex(note => note.id === id)
    notes.splice(noteIndex,1)
    res.send('DELETE Request Called')
})
module.exports = router;