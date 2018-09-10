var express = require('express');
var router = express.Router();

var users = require('../json_objects/users.json');

var username = null;
var password = null;

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.session);
    if (req.session.views) {
        req.session.views++
        res.render('login', {login: true, username: username});
    } else {
        res.render('login');
    }

});

/* POST get username and password from the form*/
router.post('/', function (req, res, next) {
    username = req.body.username;
    password = req.body.password;
    console.log(users);
    console.log(username + ": " + password);

    if (users[username] === password) {
        req.session.views = 1;
        res.render('login', {login: true, username: username});
        console.log('logined');
    } else {
        res.send('Wrong username or password');
        console.log(username + ' login fail');
    }
});

module.exports = router;