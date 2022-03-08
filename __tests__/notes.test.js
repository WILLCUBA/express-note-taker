const { createNewNote , deleteNote} = require('../lib/notes')
const notes = require('../db/db.json')

console.log(notes);

test('creates an note object', () => {
    const note = createNewNote({ title: 'Darlene', text: 'jhgdja3ng2' }, notes);
  
    expect(note.text).toBe('Darlene');
    expect(note.text).toBe('jhgdja3ng2');
  });