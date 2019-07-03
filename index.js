
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'schl';
/*
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true } ,function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
 
  db.collection('schoolsearch').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log("done");

    client.close();

  });
});
*/
MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {

  console.log("Connected successfully to server");
  const db = client.db('school');
  var cursor = db.collection('schoolsearch').find();

  cursor.each(function(err, doc) {

    assert.equal(err, null);
    if (doc != null) 
    {
        console.log(doc);
      }
// 
  });
});