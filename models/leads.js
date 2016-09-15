var mongoose = require('mongoose');

module.exports = mongoose.model('Leads', {
  firstName: String,
  lastName: String,
  email: String,
  phone: String
});