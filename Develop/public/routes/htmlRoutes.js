const path = ('path');

// console.log(__dirname)

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../notes.html'));
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join('users/' 'index.html'));
    // })ls

};