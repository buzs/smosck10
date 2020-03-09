const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

mongoose.connect(
	`mongodb+srv:/${MONGO_NAME}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
