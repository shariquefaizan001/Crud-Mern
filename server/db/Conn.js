
const mongoose = require('mongoose');
const db = 'mongodb+srv://sharique:easypass@cluster0.ocn3r.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        // useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.log(err));