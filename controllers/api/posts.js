var Post = require('../../models/post');
var router = require("express").Router();
router.get("/",function(req,res){
	Post.find().sort('-date').exec(function(err,posts){
		if(err){
			return next(err);
		}
		res.json(posts);
	});
});
router.post("/",function(req,res){
	var post = new Post({
		username:req.auth.username,
		body:req.body.body
	});
	post.save(function(err,post){
		if(err){
			return next(err);
		}
		res.json(201,post);
	});
})
module.exports = router;