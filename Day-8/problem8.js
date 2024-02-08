/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const express = require( 'express' );
const app = express();
 function positiveIntegerHandler(req, res) {
    // Your implementation here
    const number = parseInt(req.query.number);
    if (!isNaN(number) && number > 0) {
        res.send(`Success! Number is positive.`);
    } else {
        throw new Error(`Number must be positive.`);
   }
 }
 // Apply the error handling middleware
   function errorHandler(err, req, res, next){
    if(err.message ===  `Number must be positive.`) {
      res.status(400).send('Error: Number must be positive');
    } else {  
        next(err);
    }    
}
// Apply the error handling middleware
app.use(errorHandler);
app.get( '/positive', positiveIntegerHandler ) ;

//Server start
const port = 3000;
app.listen(port , () => console.log(`Server running on ${port}`));