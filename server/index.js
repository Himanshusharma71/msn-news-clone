const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'https://msnnews.onrender.com',
  credentials: true
}));

const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/news', newsRoutes);
app.use('/api/auth', authRoutes);

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.log('MongoDB Error:', err));
