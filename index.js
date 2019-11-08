require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// cors middleware
app.use(cors());

// express middleware
app.use(express.json());

const projects = require('./routes/api/projects/projects');

// routes middlware
app.use('/api/projects', projects);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
