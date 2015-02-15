
var router = require('express').Router();

var tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
	var tweets = tweetBank.list();
	res.render('index', {title: 'Twitter.js', tweets: tweets, showForm: true });

});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //console.log(list);
  res.render( 'index', {title: 'Twitter.js - Posts by '+ name, tweets: list } );
});


router.get('/users/:name/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find( {id: id} );
  //console.log(list);
  res.render( 'index', {title: 'Tweet '+ id, tweets: list } );
});



module.exports = router;

