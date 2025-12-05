import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('Missing MONGODB_URI environment variable');
}

mongoose
    .connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });

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

// Serve built client assets
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// SPA fallback: send index.html for non-API GET routes
app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
// Health check endpoint
app.get('/healthz', (req, res) => {
    const state = mongoose.connection.readyState; // 0=disconnected,1=connected,2=connecting,3=disconnecting
    res.json({ status: 'ok', db: state });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});