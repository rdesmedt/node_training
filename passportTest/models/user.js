/**
 * module for user authentication
 */

exports.authenticate = function(req, res){
	passport.authenticate('local', {
		succesRedirect: '/index',
		failureRedirect: '/',
		failureFlash: true
	});
}