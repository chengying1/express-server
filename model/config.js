const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ehome',{ useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected success')
});
module.exports = db