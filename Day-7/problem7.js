/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const express = require('express');
const app = express();
 function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    const timestamp = new Date();
    const method = req.method;
    console.log(`${timestamp}-${method} request received`);
    next();
  }
  app.use(requestLoggerMiddleware);

  app.get( '/', (req,res)=>{
      res.send("Hello Addy");
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
})