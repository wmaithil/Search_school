const express=require('express');
var app=express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//var x=document.getElementById('search');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {

  //search and filter
  console.log("Connected successfully to server");
  const db = client.db('trial');
  var query = { district: 'bangalore', block: 'south-1'};
  db.collection("trialfield").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

  //sort
    var mysort = { category: 1 };
    db.collection("trialfield").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
    
  });


});

