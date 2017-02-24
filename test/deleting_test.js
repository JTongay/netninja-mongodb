const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Deleting Records', function () {

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

 it('should delete one record from the database', function (done) {

   MarioChar.findOneAndRemove({name: 'Mario'}).then(()=>{
     MarioChar.findOne({name: 'Mario'}).then((result)=>{
       assert(result === null)
       done();
     })
   })

 })

})
