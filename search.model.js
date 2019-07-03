const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({

"district|block|cluster|schoolid|schoolname|category|gender|medium_of_inst|address|area|pincode|landmark|identification1|busroutes|identification2|latlong": "String+String+String+String+String+String+String+String+String+String+String+String+String+String+String+String"

});

module.exports = mongoose.model('Note', NoteSchema);