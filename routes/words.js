var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET users listing. */
router.get('/game', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, '../GameThreadCleaned.json'));
  let comments = JSON.parse(data).comments;
  var returndata = []
  comments.forEach(comment => {
    if(comment.text.includes(req.query.word)){
        returndata.push(comment)
    }
    //console.log(comment.text);
  });
  res.json(returndata)
  //res.send('word is a ' + req.query.word);
});

/* GET users listing. */
router.get('/chat', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, '../Chat.json'));
  let comments = JSON.parse(data).comments;
  var returndata = []
  comments.forEach(comment => {
    if(comment.text.includes(req.query.word)){
      returndata.push(comment)
    }
    //console.log(comment.text);
  });
  res.json(returndata)
  //res.send('word is a ' + req.query.word);
});

module.exports = router;
