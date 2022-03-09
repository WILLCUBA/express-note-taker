const { json } = require('express/lib/response');
const fs = require('fs')
const path = require('path')

function createNewNote(body, noteArr){
    const note = body;
    noteArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({noteArr}, null, 2)        
    );
    return note    
}


module.exports = {
    createNewNote,
}