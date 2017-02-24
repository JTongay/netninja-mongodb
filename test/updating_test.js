const assert = require('assert');
const MarioChar = require('../models/mariochar');


describe('Updating Records', function () {

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

 it('should update one record from the database', function (done) {

  MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Yoshi'}).then(()=>{
    MarioChar.findOne({_id: char._id}).then((result)=>{
      assert(result.name === 'Yoshi')
      done();
    })
  })

 })

})
