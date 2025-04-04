const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const https = require('https');
const fs = require('fs');
const PORT = 3000;

app.use(cors());

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/products', (req, res) => {
    res.json(products);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Read the SSL certificate and key
const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'certificate.crt'), 'utf8');

// Create HTTPS server with Express app
const server = https.createServer({
  key: privateKey,
  cert: certificate
}, app);


// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});