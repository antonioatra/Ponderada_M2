const express = require('express');
const cors = require('cors');
const router = require('./routes');
const frontRoutes = require('./routes/frontRoutes');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', frontRoutes);
app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});