const express = require('express');
require('dotenv').config();
require('./config/db.config')
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');


const app = express();
app.use(express.json());

app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.listen(process.env.PORT, (err) => {
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`)
})