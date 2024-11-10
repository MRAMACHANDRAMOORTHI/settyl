const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Use the URI from environment variables
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
