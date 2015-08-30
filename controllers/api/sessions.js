var User   = require('../../models/user');
var router = require("express").Router();
var config = require("../../config");
var jwt    =  require('jwt-simple');
router.post('/',function(req,res,next){
	User.findOne({username:req.body.username})
	.select('password').select('username')
	.exec(function(err,user){
		if(err){ 
			return res.send(401)
		}
		if(!user){
			return res.send(401)
		}
		if(user.password==req.body.password){
			var token=jwt.encode({username:req.body.username},config.secret);
			res.send(token);
		}
		else{
			return res.send(401);
		}
	});
})

module.exports = router;