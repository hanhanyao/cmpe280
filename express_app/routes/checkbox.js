
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('checkbox');
});
router.post('/', function (req, res, next){
    // if(req.post.body.name.music){
    //     console.log('test');
    // }
    if(req.body.music) {
        //console.log(req.body.name);
        res.render('postcheck', {test: req.body.music});
    }else if(req.body.ancient){
        res.render('postcheck', {test: req.body.ancient});
    }else if(req.body.romantic){
        res.render('postcheck', {test: req.body.romantic});
    }else if(req.body.popular){
        res.render('postcheck', {test: req.body.beaches});
    }else if(req.body.beaches){
        res.render('postcheck', {test: req.body.beaches});
    }
    
});
module.exports = router;
