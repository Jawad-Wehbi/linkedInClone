const express = require('express');
require('dotenv').config();
require('./config/db.config')
const authRoutes = require('./routes/auth.routes');


const app = express();
app.use(express.json());

app.use('/auth', authRoutes)

app.listen(process.env.PORT, (err) => {
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`)
})