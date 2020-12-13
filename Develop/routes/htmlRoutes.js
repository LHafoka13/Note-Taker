// const path = require("path");


// module.exports = (app) => {
//   //GET REQUESTS
//   app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "notes.html"));
//   });
//   //DEFAULTS TO HOME PAGE
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });
// };

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile('notes.html', {root: __dirname});
    });

    app.get('*', (req, res) => {
        res.sendFile('index.html', {root: __dirname});
    });

};