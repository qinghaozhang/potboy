var Q = require('q');
var User = require('./userModel.js');
var jwt = require('jsonwebtoken')


// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);


var jwtSecret = 'sdgsdfiq41rjhfjahbsinasjdnudi1h281u3';

module.exports = {
  jwtSecret: jwtSecret,

  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.sign({
                  username: user.username
                }, jwtSecret, { expiresIn: 60*60});
                res.json({
                  token: token,
                  user: user
                });
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // check to see if user already exists
    findUser({username: username})
      .then(function (user) {
        if (user) {
          res.render({})
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          return createUser({
            username: username,
            password: password
          });
        }
      })
      .then(function (user) {
        res.json({
          user: user
        });
      })
      .fail(function (error) {
        next(error);
      });
  },


  addFavor: function (req,res,next) {
    // findRestaurant({id: req.params.id})
    findUser({username: req.user.username})
      .then(function (user) {
        var id = req.body.id
        if(!user.favor.includes(id)){
          user.favor.push(id)
          user.save()
        }
        res.json({
          user: user
        });
      })
      .fail(function (error) {
        next(error);
      });
  },

  getUser: function (req, res, next) {
    findUser ({username: req.user.username})
      .then(function (user) {
        res.json(user)
      })
      .fail(function (error) {
        next(error);
      })
  }
};
