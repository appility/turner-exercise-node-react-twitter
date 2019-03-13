var express = require('express')
var router = express.Router()
var Twitter = require('twitter')
var config = require('./../config.js')

var T = new Twitter(config)

var defaultParams = {
  screen_name: '@cnnbrk',
  count: 10,
  exclude_replies: true
}

router.get('/api/getTweets/:screen_name', (req, res) => {
	let dynamicParams = Object.assign({}, defaultParams, { screen_name: req.params.screen_name });
	T.get('statuses/user_timeline', dynamicParams, function(err, data, response) {
	  if(!err){
	  	res.json(data)
	  } else {
	    console.log(err)
	  }
	})
})

module.exports = router
