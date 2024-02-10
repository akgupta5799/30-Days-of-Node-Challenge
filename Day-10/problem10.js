/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
 const express = require('express');
 const app = express();
 const path = require('path');
 const PORT = 3000;

 function staticFileServer(req, res) {
     // Your implementation here
     if(res === '/')
         res.sendFile(path.join(__dirname, 'public', 'index.html'));
     else {
         res.sendFile(path.join(__dirname, 'public', 'styles/style.css'));
     }
 }
    app.use(express.static(path.join(__dirname, 'public')))
    app.get('/', staticFileServer)
    app.listen(PORT, function (err) {
     if (err) console.log(err);
     console.log("Server listening on PORT", PORT);
 });