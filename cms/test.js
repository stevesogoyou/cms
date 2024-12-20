const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');

const app = express();
app.use(bodyParser.json());

// Ajouter les routes
app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
