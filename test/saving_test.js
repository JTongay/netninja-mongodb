const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving Records', function () {
 it('Saves a record to the database', function (done) {

   var char = new MarioChar({
     name: 'Mario',
     weight: 60
   })

   var Luigi = new MarioChar({
     name: 'Luigi',
     weight: 80
   })

   char.save().then(()=>{
     assert(char.isNew === false);
   })

   Luigi.save().then(()=>{
     assert(Luigi.isNew === false);
     done()
   })


 })
})
