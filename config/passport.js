require('dotenv').config();

const { JsonWebTokenError } = require('jsonwebtoken');
// A passport strategy for authenticating with a JSON web token
// This allows us to authenticate endpoints using a token
const JwtStrategy = require('passport-jwt.strategy');
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// JWT_SECRET is inside of our environment
options.secretOnKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        // Have a user that we're going to find by the id in the payload
        // When we get a user back, we will check to see if that user is in the database.
          
    }))
}



