var express = require('express');
var router = express.Router();

/* POST username and password*/
router.post('/register', function(req, res) {
    var name = req.body.username;
    var color = req.body.password;

    res.render('register');
});

module.exports = router;