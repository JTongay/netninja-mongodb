const mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise;

//Connect to DB before tests run
before((done)=>{
  //Connect to MongoDB
  mongoose.connect("mongodb://localhost/testaroo");

  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks');
    done();
  }).on('error', function(err) {
    console.log('Connection error:', err);
  })
})
