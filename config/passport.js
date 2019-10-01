const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const constants = require('./constants');

const userModel = require('../models').user;

(function(passport){
    const opts= {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: constants.SALT,
    };

    passport.use('jwt', new JwtStrategy(opts, function (jwt_payload, done) {
        userModel
            .findByPk(jwt_payload.id)
            .then(user => done(null, user))
            .catch(error => done(error, false));
    }));
})(passport);

module.exports = passport;