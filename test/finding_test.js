const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Finding Records', function () {

  var char

  beforeEach((done)=>{
    char = new MarioChar({
      name: 'Mario',
      weight: 60
    })

    char.save().then(()=>{
      done();
    })
  })

 it('should find one record from the database', function (done) {

   MarioChar.findOne({name: 'Mario'}).then((result)=>{
     assert(result.name === 'Mario')
     done();
   })

 })

 it('should find one record by id from the database', function (done) {

   MarioChar.findOne({_id: char._id}).then((result)=>{
     assert(result._id.toString() === char._id.toString())
     done();
   })

 })

})
