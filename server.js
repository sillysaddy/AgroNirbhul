import express from 'express';
import cors from 'cors';
import { getDB, client } from './backend/db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize DB connection when server starts
let db;
async function initDB() {
  try {
    db = await getDB();
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}
initDB();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Example route to test DB connection
app.get('/test-db', async (req, res) => {
  try {
    if (!db) {
      db = await getDB();
    }
    const result = await db.command({ ping: 1 });
    res.json({ message: 'Database connected', serverInfo: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Gracefully close MongoDB connection when server shuts down
process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});