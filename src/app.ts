import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// Express setup
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// MongDB setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee-power', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error!'));
db.once('open', () => console.log('Connection Succeeded!'));

// Routes
const routes = require('./routes')
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
