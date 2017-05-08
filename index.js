var express = require('express');
var app = express();
var port = 3000;

app.use('/', express.static('views'));
app.use('/', express.static('bower_components'));

app.get('', function(req, res) {
	res.redirect('/index.html')
	// res.send('hello, world!');
})

app.post('/getRes', function(req, res) {
	var n = Math.random();
	var json = {
		level: 4,
		msg: '谢谢'
	};
	if(n < 0.1){
		json.level = 1,
		json.msg = '1等奖'
	};
	if(n < 0.3){
		json.level = 2,
		json.msg = '2等奖'
	}
	if(n < 0.6){
		json.level = 3,
		json.msg = '3等奖'
	}

	res.json({
		code: 200,
		data: json
	})
})

app.listen(port, function(req, res) {
	console.log('app listen on port ' + port);
})