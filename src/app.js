const express = require('express');
const apiRouter = require('./routes');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();
apiRouter(app)

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
