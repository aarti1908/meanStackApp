
const User = require('../models/user');
const Bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.createUser = (req, res, next) => {
    Bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email : req.body.email,
            password : hash
        })

        user.save().then(result => {
            res.status(201).json({
                message : 'User Created!',
                result : result
            });
        }).catch((error) => {
            res.status(500).json({
                error : error
            })
        })
    })
};

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        fetchedUser = user;
        return Bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          'dev_jwt_key$123',
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      });
};