require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/database');
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
db.connect()
  .then(() => {
    console.log('✅ Conectado ao banco de dados PostgreSQL');
    
    // Import and use routes
    const apiRoutes = require('./routes/apiRoutes');
    const frontendRoutes = require('./routes/frontRoutes');
    
    // Use routes
    app.use('/api', apiRoutes);
    app.use('/', frontendRoutes);
    
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  });