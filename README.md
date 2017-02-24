Mongo DB Playlist

What is Mongo?
  - noSQL DB (basically a collection of objects)
  - Use it anytime you want to store data and persist it in your application.
  - Mongo is the 'M' in MEAN or MERN
  - Mongoose is used to communicate from the server to MongoDB

Mongo Methods for finding
  - find(criteria)
  - findOne(criteria)
  - use these methods on the models themselves, unlike the save() method

Deleting Records
  - char.remove()
  - MarioChar.remove()
  - MarioChar.findOneAndRemove() - This finds the first one and removes it

Updating Records
  - char.update()
  - MarioChar.update()
  - MarioChar.findOneAndUpdate() - Again, this finds the first and updates it
