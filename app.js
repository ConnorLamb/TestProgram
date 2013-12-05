express = require('express');
http = require("http");
https = require("https");
app = express();
ejs = require('ejs');

var tomatoes = require('tomatoes');
var movies = tomatoes('6nkt9qb3ggxbd3ejyzsjvq3x');

var analyze = require('Sentimental').analyze,
    positivity = require('Sentimental').positivity,
    negativity = require('Sentimental').negativity;
var util = require('util'),
    twitter = require('twitter');
	
var port = process.env.PORT || 3000;
app.use('/', express.static(__dirname + '/public'));
	
var twit = new twitter({
    consumer_key: 'gkuaT5z92bzScpfZkKYFw',
    consumer_secret: 'GVcb98Q5skwmuXfh4ZGrGSDTNrUEcXcCFXzULAuPi8',
    access_token_key: '169690909-GyTirgq5eCVnnYIlD9Cvi09T68slVKJX2Z6bLEGh',
    access_token_secret: 'sVRdpCKeCp3BBU2edO9sqBmSzsPrYqGrfhenda9KVlsBx'
});

require('./node_modules/twitter/index.js');

app.engine('html', ejs.renderFile);



app.get('/',function(req,res){
    
    res.render('index.ejs');

});

app.get('/', function(req, res) {res.render('index')});


twit.search('#yolo #swag', function(data) {
movies.search('The Dark Knight', function(err, results) {
	console.log("http://www.rottentomatoes.com/m/" + results[0]['id']);
	console.log(results[0]['title'] + "(" + results[0]['year'] + ")" + "(" + results[0]['mpaa_rating'] + ")" );
	console.log(results[0]['runtime'] + " minutes");
	console.log(results[0]['critics_consensus']);
	console.log(results[0]['ratings']['critics_score'] + "(" + results[0]['ratings']['critics_rating'] + ")");
	console.log(results[0]['ratings']['audience_score'] + "(" + results[0]['ratings']['audience_rating'] + ")");
});

for(i=0;i<10;i++){

	console.log(data['statuses'][i]['user']['profile_image_url']);
	console.log(data['statuses'][i]['user']['screen_name']);
	console.log(data['statuses'][i]['text']);
	console.log(data['statuses'][i]['user']['created_at']);
	console.log(analyze(data['statuses'][i]['text'])['score']);
	console.log("\n");
}
	});
	
console.log("Listening on 3000");
app.listen(port);