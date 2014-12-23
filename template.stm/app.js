var express = require("express"),
	util 	= require('util'),
    http    = require("http"),
    request = require("request"),
    argv	= require('minimist')(process.argv.slice(2));


// MOVIES
if (argv.m) {	
	var url = 'http://bit.ly/1AFrWvK';
	
	request(url, function(error, response, html) {
	
		if(!error) {
			console.log(html);
		}
		else {
			var empty = [];
			console.log(JSON.stringify(empty));
		}
	});	
}

// EPISODES
if (argv.e) {	
	var url = 'http://bit.ly/1B3aZJB';
	
	request(url, function(error, response, html) {
	
		if(!error) {
			console.log(html);
		}
		else {
			var empty = [];
			console.log(JSON.stringify(empty));
		}
	});	
}
