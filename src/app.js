const express = require('express');
const path = require('path');
const apiRouter = require('./routes');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();
apiRouter(app)

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;