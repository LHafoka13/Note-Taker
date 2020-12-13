const noteData = require('../db/db.json')


module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
      let newNote = req.body;

      console.log(newNote);

      noteData.push(newNote);
      res.json(newNote)  
    })

    
};