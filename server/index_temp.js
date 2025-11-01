import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to MongoDB
mongoose.connect("mongodb+srv://msing506:WebDev123@myportfolio.izz74kf.mongodb.net/?appName=MyPortfolio");
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });

import projectRoutes from './routes/project.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use(morgan('dev'));

//Routes

app.use('/projects', projectRoutes);
app.use('/users', userRoutes)

app.use('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API! Again' });
});

app.use('/', (req, res) => {
    res.json({ message: 'Welcome to my Portfolio application' });
});

app.listen(3000);   

console.log('Server running at http://localhost:3000/');