// const noteData = require('../db/db.json')
const fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = (app) => {
    app.get('/api/notes', (req, res) => readFileAsync('./db/db.json', 'utf8').then((data) => {
      res.json(data);
    }));


    app.post('/api/notes', (req, res) => {
      let newNote = req.body;

      console.log(newNote);
      readFileAsync('./db/db.json', 'utf8').then(data => {

        let parsedData = JSON.parse(data)
        let updatedNotes = [...parsedData, newNote];

        return updatedNotes;
      }).then(parsedNotes => {
        return writeFileAsync('./db/db.json', JSON.stringify(parsedNotes))
      .then(() => {
        res.json(newNote);
      })
      })  
      // noteData.push(newNote);
      // res.json(newNote)
      // res.end();
    })


  }