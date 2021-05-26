const { query } = require('express');
var User = require('../models/User');
class UserController {
    createAccount(req, res) {
        var postbody = req.body;
        var email = postbody.email;
        console.log(email)
        User.find({ "email": email }).exec(function(err, r) {
            if (r.length == 1) {
                res.json("Tài khoản đã tồn tại");
            } else {
                const user = new User(postbody);
                user.save();
            }
        })
    }
    login(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        console.log(req.body)
        User.find({ "email": email }).exec(function(err, r) {
            if (r.length == 1) {
                if (r[0].password != password) {
                    console.log(typeof password)
                    console.log(typeof r[0].password)
                    console.log(r[0].password)
                    res.json('Mật khẩu không chính xác')
                } else {
                    if (r[0].role == 'admin') {
                        res.json('admin');
                    } else {
                        res.json("employee")
                    }
                }
            } else {
                res.json('Tài khoản không tồn tại')
            }
        })
    }

}
module.exports = new UserController;