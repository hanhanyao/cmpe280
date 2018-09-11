var express = require('express');
var router = express.Router();

var fs = require('fs');
var users = require('../json_objects/users.json');

router.get('/', function (req, res, next) {
    res.render('register');
});


/* POST username and password*/
router.post('/', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    users[username] = password;
    var json = JSON.stringify(users, null, 4);

    fs.writeFile(__dirname+'/../json_objects/users.json', json, 'utf8', function (error) {
        if (error) {
            console.error(error);
            res.render('error', {error: error});
        } else {
            console.debug(username + ' is added');
            res.redirect('/profile');
        }
    });
});

module.exports = router;