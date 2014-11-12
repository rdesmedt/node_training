
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Passport Test',
	  					message: 'Welkom, laat ons hopen dat dit een succes wordt!'});
};