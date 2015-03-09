var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');



module.exports = function(io) {

    router.use(bodyParser.urlencoded({
        extended: false
    }));

    router.use(bodyParser.json());

    router.get('/', function(req, res) {
        var tweets = tweetBank.list();
        res.render('index', {
            title: 'Twitter.js',
            tweets: tweets,
            showForm: true
        });

    });

    router.get('/users/:name', function(req, res) {
        var name = req.params.name;
        var list = tweetBank.find({
            name: name
        });
        //console.log(list);
        res.render('index', {
            title: 'Twitter.js - Posts by ' + name,
            tweets: list,
            showForm: true
        });
    });


    router.get('/users/:name/tweets/:id', function(req, res) {
        var id = req.params.id;
        var list = tweetBank.find({
            id: id
        });
        //console.log(list);
        res.render('index', {
            title: 'Tweet ' + id,
            tweets: list
        });
    });

    router.post('/submit', function(req, res) {

        JSON.stringify(req.body, null, 2);

        var name = req.body.name;
        var text = req.body.text;
        tweetBank.add(name, text);
        
        var tweet = tweetBank.find({
             name: name,
             text: text
         });


        io.sockets.emit('new_tweet', { name: name, text: text });

        res.send(200);
    });


    return router
}

//module.exports = router;