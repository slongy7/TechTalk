const jwt = require('jsonwebtoken');

const secret = 'cheetotoes';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
            console.log('token1:' + token);
        if (req.headers.authorization) {
            console.log('headers auth:' + req.headers.authorization);
            token = token.split(' ').pop().trim();
            console.log('token2:' + token);
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};