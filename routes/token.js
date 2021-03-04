//use the generated token for the chat application to use
//expose the endpoint for token generation - this endpoint is responsible for providing a valid token when passed as a param

const express = require('express');
const router = express.Router();
const TokenService = require('../services/tokenService');

//POST to /token
router.post('/', function(req, res) {
    const identity = req.body.identity;

    const token = TokenService.generate(identity)

    res.json({
        identity: identity,
        token: token.toJwt(),
    });
});

//GET from /token

router.get('/', function(req, res) {
    const identity = req.query.identity;

    const token = TokenService.generate(identity)

    res.json({
        identity: identity,
        token: token.toJwt(),
    });
});

module.exports = router;