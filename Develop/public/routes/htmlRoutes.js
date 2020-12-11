// const path = ('path');

// console.log(__dirname)

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile('notes.html', {root: __dirname});
    });

    app.get('*', (req, res) => {
        res.sendFile('index.html', {root: __dirname});
    });

};