const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/test_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToMongoDB();