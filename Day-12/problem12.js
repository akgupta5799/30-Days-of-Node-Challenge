
const express = require("express");
// The express-rate-limit is for
// limiting the incoming request.
const rateLimit = require("express-rate-limit");

const app = express();
/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
 function rateLimitMiddleware(req, res, next) {
    limiter(req, res, next);
  }
const limiter = rateLimit({
	max: 2,
	windowMs: 60 * 1000,
	message: "Too many request from this IP"
});

app.use(limiter);

// GET route to handle the request coming from user
app.get("/",rateLimitMiddleware,(req, res) => {
	res.status(200).json({
		status: "success",
		message: "Hello from the Adarsh"
	});
});

// Server Setup
const port = 8000;
app.listen(port, () => {
	console.log(`app is running on port ${port}`);
});
