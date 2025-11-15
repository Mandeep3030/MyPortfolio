import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Allow frontend (Vite) to call backend API during dev
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(morgan('dev'));

//Routes
import contact from "./routes/contact.js";
import project from "./routes/project.js";
import qualification from "./routes/qualification.js";
import user from "./routes/user.js";
import auth from "./routes/auth.js";

app.use("/api/contacts", contact);
app.use("/api/projects", project);
app.use("/api/qualifications", qualification);
app.use("/api/user", user);
app.use("/api/auth", auth);

app.use('/', (req, res) => {
    res.json({ message: 'Welcome to my Portfolio application' });
});


app.listen(3000);   

console.log('Server running at http://localhost:3000/');