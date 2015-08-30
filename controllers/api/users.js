var User   = require('../../models/user');
var router = require("express").Router();
var config = require("../../config");
var jwt    =  require('jwt-simple');
router.get('/',function(req,res,next){
	if(!req.headers['x-auth']){
		res.send(401);
	}
	var auth = jwt.decode(req.headers['x-auth'],config.secret)
	User.findOne({username:auth.username},function(err,user){
		if(err){ return next(err);}
		res.json(user);
	});	
});
router.post('/',function(req,res,next){
	User.findOne({username:req.body.username},function(err,user){
		if(user && user.username==req.body.username){
			var retval = {
				userExists:true
			}
			res.json(retval);
		}
		else{
			var user = new User({username:req.body.username});
			//TODO : Inject bcrypt to store hashed password
			user.password = req.body.password;
			user.save(function(err){
				if(err){
					return next(err);
				}
				res.send(201);
			})
		}
	});
	
});
module.exports = router;