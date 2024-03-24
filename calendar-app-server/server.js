const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');
const semesterRoutes = require('./routes/semesters');
const classRoutes = require('./routes/classes');
const assignmentRoutes = require('./routes/assignments');
const examRoutes = require('./routes/exams');
const eventRoutes = require('./routes/events');


const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json()); 



mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
app.use('/api/users', userRoutes);
app.use('/api/semesters', semesterRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
