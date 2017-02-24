const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting Records', function () {

  beforeEach((done)=>{
    mongoose.connection.collections.authors.drop(()=>{
      done();
    })
  })


 it('creates an author with sub-documents', function (done) {

   var pat = new Author({
     name: 'Patrick Rothfuss',
     books: [{title: 'Name of the Wind', pages: 400}]
   })

   pat.save().then(()=>{
     Author.findOne({name: 'Patrick Rothfuss'}).then((res)=>{
       assert(res.books.length === 1)
       assert(res.books[0].title === 'Name of the Wind')
       done()
     })
   })

 })

 it('adds a book to an author', function (done) {

   var pat = new Author({
     name: 'Patrick Rothfuss',
     books: [{title: 'Name of the Wind', pages: 400}]
   })

   pat.save().then(()=>{
     Author.findOne({name: 'Patrick Rothfuss'}).then((res)=>{
       res.books.push({title: "Wise Man's Fear", pages: 500});
       res.save().then(()=>{
         Author.findOne({name: 'Patrick Rothfuss'}).then((result)=>{
           assert(result.books.length === 2)
           done()
         })
       })
     })
   })

 })


})
