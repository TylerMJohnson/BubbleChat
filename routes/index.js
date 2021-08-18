var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BubbleChat' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var text = req.body.text;
  var created_utc = req.body.created_utc;

  //https://stackoverflow.com/questions/948532/how-do-you-convert-a-javascript-date-to-utc
  //var date = new Date();
  //var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
  //    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
 // var utctime = new Date(now_utc);

  var entry = {"created_utc": new Date().toUTCString(), "text": text};

  let json = fs.readFileSync(path.resolve(__dirname, '../Chat.json'));

  let data = JSON.parse(json);
  data['comments'].push(entry)
  var strNotes = JSON.stringify(data);

  fs.writeFile(path.resolve(__dirname, '../Chat.json'), strNotes, function(err){
    if(err) return console.log(err);
    console.log('Comment added');
  });

  res.send('respond with a resource');
});

module.exports = router;
