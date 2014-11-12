/**
 * New node file
 */
var passport = require('passport')
	, LocalStrategy = require('passport-local').Strategy;

exports.authenticate = function(req, res){
	passport.authenticate('local', {
		succesRedirect: '/index',
		failureRedirect: '/login',
		failureFlash: true
	});
};